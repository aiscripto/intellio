"use client";

import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger, SplitText);

export function useRevealAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    // Small delay to ensure DOM is ready after route change
    const timer = setTimeout(() => {
      const revealContainers =
        document.querySelectorAll<HTMLDivElement>(".reveal");

      revealContainers.forEach((container) => {
        const image = container.querySelector<HTMLImageElement>("img");
        if (!image) return;

        // Reset any previous GSAP properties
        gsap.set(container, { clearProps: "all" });
        gsap.set(image, { clearProps: "all" });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            toggleActions: "play none none none",
            start: "top 80%", // Adjust as needed
          },
        });

        tl.set(container, { autoAlpha: 1 })
          .from(container, { xPercent: -100, duration: 1, ease: "power2.out" })
          .from(
            image,
            { xPercent: 100, scale: 1, duration: 1, ease: "power2.out" },
            "-=1"
          );
      });

      // Refresh ScrollTrigger to recalculate positions
      ScrollTrigger.refresh();
    }, 100);

    // Cleanup function
    return () => {
      clearTimeout(timer);

      // Kill all ScrollTriggers and clear properties
      ScrollTrigger.getAll().forEach((trigger) => {
        trigger.kill();
      });

      // Clear GSAP properties from reveal containers
      document
        .querySelectorAll<HTMLDivElement>(".reveal")
        .forEach((container) => {
          gsap.set(container, { clearProps: "all" });
          const image = container.querySelector<HTMLImageElement>("img");
          if (image) {
            gsap.set(image, { clearProps: "all" });
          }
        });
    };
  }, [pathname]);
}

const getDataAttr = (
  element: Element,
  attr: string,
  defaultValue: any = null
) => {
  return element.hasAttribute(`data-${attr}`)
    ? element.getAttribute(`data-${attr}`)
    : defaultValue;
};

export function useTextAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    const timer = setTimeout(() => {
      // Kill existing animations and revert splits
      document.querySelectorAll(".split_chars").forEach((item: any) => {
        if (item.split) {
          item.split.revert();
        }
      });

      document.querySelectorAll(".split_chars").forEach((item) => {
        const tweenOptions: gsap.TweenVars = {
          duration: parseFloat(getDataAttr(item, "duration", "0.3")),
          delay: parseFloat(getDataAttr(item, "delay", "0.3")),
          autoAlpha: 0,
          stagger: parseFloat(getDataAttr(item, "stagger", "0.1")),
          ease: getDataAttr(item, "ease", "power2.out"),
          x: getDataAttr(item, "translateX", 0),
          y: getDataAttr(item, "translateY", undefined),
        };

        const isScrollable =
          getDataAttr(item, "scroll-trigger", true) !== "false";

        if (isScrollable) {
          tweenOptions.scrollTrigger = {
            trigger: item,
            start: getDataAttr(item, "trigger-start", "top 90%"),
            markers: false,
          };
        }

        const split = new SplitText(item, { type: "chars, words" });
        (item as any).split = split; // Store split instance for cleanup
        gsap.from(split.chars, tweenOptions);
      });

      const animateCharCome = (selector: string, stagger: number) => {
        document.querySelectorAll(selector).forEach((element: any) => {
          if (element.split) {
            element.split.revert();
          }
          const split = new SplitText(element, { type: "chars, words" });
          element.split = split;
          gsap.from(split.chars, {
            duration: 1,
            x: 70,
            autoAlpha: 0,
            stagger,
          });
        });
      };

      animateCharCome(".animation__char_come", 0.05);
      animateCharCome(".animation__char_come_long", 0.15);

      document.querySelectorAll(".split-text").forEach((element: any) => {
        const text = element.textContent || "";
        element.innerHTML = text
          .split("")
          .map(
            (char: any) =>
              `<span class="char">${char === " " ? "\u00A0" : char}</span>`
          )
          .join("");

        gsap.to(element.querySelectorAll(".char"), {
          opacity: 1,
          y: 0,
          rotation: 0,
          duration: 0.5,
          stagger: 0.05,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: element,
            start: "top 80%",
            toggleActions: "play none none reverse",
            markers: false,
          },
        });
      });

      document
        .querySelectorAll<HTMLElement>(".text-anime-3")
        .forEach((element: any) => {
          if (element.animation) {
            element.animation.progress(1).kill();
          }
          if (element.split) {
            element.split.revert();
          }

          element.split = new SplitText(element, {
            type: "lines,words,chars",
            linesClass: "split-line",
          });

          gsap.set(element, { perspective: 400 });
          gsap.set(element.split.chars, { opacity: 0, x: 50 });

          element.animation = gsap.to(element.split.chars, {
            scrollTrigger: { trigger: element, start: "top 90%" },
            x: 0,
            y: 0,
            rotateX: 0,
            opacity: 1,
            duration: 1,
            ease: "back.out(1.7)",
            stagger: 0.02,
          });
        });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);

      // Cleanup all text animations
      document
        .querySelectorAll(
          ".split_chars, .animation__char_come, .animation__char_come_long, .split-text, .text-anime-3"
        )
        .forEach((element: any) => {
          if (element.split) {
            element.split.revert();
          }
          if (element.animation) {
            element.animation.kill();
          }
        });

      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [pathname]);
}

export function useFadeInAnimation() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const timer = setTimeout(() => {
      const itemsToReveal = gsap.utils.toArray<HTMLElement>(".fade-in");

      itemsToReveal.forEach((item) => {
        gsap.set(item, { clearProps: "all" });

        gsap.set(item, {
          autoAlpha: 0,
          y: 50,
        });

        ScrollTrigger.create({
          trigger: item,
          start: "top bottom-=100px",
          once: true,
          onEnter: () => {
            gsap.to(item, {
              autoAlpha: 1,
              y: 0,
              duration: 0.6,
              ease: "power2.out",
            });
          },
        });
      });

      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      const itemsToReveal = gsap.utils.toArray<HTMLElement>(".fade-in");
      itemsToReveal.forEach((item) => {
        gsap.set(item, { clearProps: "all" });
      });
    };
  }, [pathname]);
}

export function useStickyHeader() {
  useEffect(() => {
    const handleScroll = () => {
      const sticky = document.getElementById("sticky-header");
      if (!sticky) return;

      const scroll = window.scrollY;

      if (scroll < 100) {
        sticky.classList.remove("sticky");
      } else {
        sticky.classList.add("sticky");
      }
    };
    window.addEventListener("scroll", handleScroll);

    handleScroll();
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
}
