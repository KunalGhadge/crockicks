/**
 * CrocKicks™ Universal Product Catalog Database
 * Supplies dynamic silhouettes, 360° studio angles, specifications, and colorways
 * across index.html and product.html
 */

const CrocProducts = (function () {
  const CATALOG = {
    "classic-clog": {
      id: "classic-clog",
      title: "Classic Clog Iconic",
      tagline: "The Global Foam Revolution — 13 Customizable Ports",
      series: "Classic Core Series",
      price: 2995,
      comparePrice: 3495,
      badge: "Iconic Core",
      rating: "4.9 (2,840 verified reviews)",
      breadcrumb: "Classic Clogs",
      description: "The silhouette that launched a comfort revolution across India. Handcrafted from proprietary closed-cell Croslite™ foam with 13 anatomical ventilation ports. Buoyant, feather-light, monsoon-resistant, and washable in seconds.",
      specs: [
        { label: "Ventilation Ports", value: "13 Air & Jibbitz Ports" },
        { label: "Monsoon Rating", value: "100% Water-Immersion Safe" },
        { label: "Upper Material", value: "100% Closed-Cell Croslite™" },
        { label: "Tread Grip", value: "All-Terrain Non-Skid Sole" }
      ],
      features: [
        "Incredibly light and fun to wear — ideal for Indian monsoons & street style",
        "Pivoting heel straps for a secure lockdown fit",
        "Customizable with up to 26 tactile Jibbitz™ charms",
        "Water-friendly and buoyant; easily washes clean with soap and water"
      ],
      angles: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA7bTx32njHtcyvERpslc_GtsCenoIyYlulaMXT7OEXeQhm072jTFM7-yX0HXz-qmK5vKTMW-7JVd14p7uFlcErNa_px8LLYW0NSR_O0x1eMBoBMru17wioljnrKWqafX5G0a35OUMJxUC30N7EtbuoRArxiaKu6TvF0m1ytuXez9DKJHZpPJm5lr3An4xf_RT1c_vpNORy2STUA_OsyZ0loobJo29i9ISM0WlroBMY",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDVLjW0ghuBf6czQWSoIH2p5_90YUSEHPQ6w2BTHxTRusonXy77JlFp88XLMtJYzJZdIeir9u_VIq3eOAsgwkuiyLD2bQIhSyg084EfQFEvPv8ylBShlsqxe5DZBcr4f89JcjOKPM7hcAQvI4gGJOrlyUDGlCfdfImAVxDaOnkhx4fPAGx3_JDZl9lHrFGib8n-Sq1Z6FZbLbqrUPNmtgj1mkvLG_de5r0QDDaux0Rz",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAX78HCGL0cRnINHirkJgmW4dLfaXj6xY8Ujl0vTCUFXIxk3A9I2a3WTF3MGTHxn81QnX6eIIKc3gG9X9oFrFcSyO6tYV0mPl_BwPzaq_GejoT4zvdUDa18v3OlZtpFsoaREmmPihW23F1U_k01UxbbMXifFgdC8z_szdB-bar7kCklsDXM1So4xKfL14AX7KBlVSrdwZXOEefUh5486WDmKOKW-pLJoBx-3BK3wtiC",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDv7j9VOiK_Ct8res7HAU23aiUpQS8f3dpuRtDswlzd5UGB80B4VgGSsyvtbsi_iZ6-tXP3MmuQY1_q_frF8ov3cMAoqimLOABWaMxSVSgWV5yJ_9Z0fmMmVItCiWXq9NMSktTq0wGL-RRn6wq_ClUH7CeSzHCjWsaGta2B6h4a4wqOZZGDUHOy6sUCvdaUUrPBDRYTtWO6yTNpSscIdnAazz-ikR8e6c9MKb7H9DkY"
      ],
      colorways: [
        { name: "Golden Amber Sun", hex: "#F59E0B", aura: "rgba(245, 158, 11, 0.45)" },
        { name: "Pacific Cobalt Blue", hex: "#1D4ED8", aura: "rgba(29, 78, 216, 0.45)" },
        { name: "Deep Obsidian Noir", hex: "#1E293B", aura: "rgba(30, 41, 59, 0.35)" },
        { name: "Vibrant Crimson Red", hex: "#E11D48", aura: "rgba(225, 29, 72, 0.45)" },
        { name: "Solar Blaze Orange", hex: "#EA580C", aura: "rgba(234, 88, 12, 0.45)" }
      ]
    },

    "platform": {
      id: "platform",
      title: "Classic Platform Clog (+5cm)",
      tagline: "Architectural Height & Chunky Haute Foam Silhouette",
      series: "Platform Series",
      price: 3995,
      comparePrice: 4995,
      badge: "+5cm Lift",
      rating: "5.0 (1,490 verified reviews)",
      breadcrumb: "Platform Atelier",
      description: "An exaggerated high-fashion silhouette engineered with a +5cm sculptural platform lift. Gives you noticeable posture boost while preserving Croslite™ cloud-soft cushioning. Built for India's high streets.",
      specs: [
        { label: "Platform Height", value: "+5cm (2.0 inches) Sculpted Lift" },
        { label: "Port Grid", value: "26 Perimeter Precision Ports" },
        { label: "Midsole Core", value: "High-Density Shock Absorbent Foam" },
        { label: "Outsole", value: "Deep Lug Traction Pods" }
      ],
      features: [
        "Elevated 5cm wedge heel for dramatic high-fashion stance",
        "Anatomically molded footbed cradles heels and arches",
        "Customizable with Jibbitz™ charms across both upper and backstrap",
        "Iconic Crocs Comfort™: Lightweight. Flexible. 360-degree comfort."
      ],
      angles: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAgJaQ6j6ZDeq3R7dPQOQvLhQjI3J1FJ9XiIUczpgfVYzhEzX97yYAEFTWnRloaBwgEIRbZie9QV6Y_5eXlmmKtVYTC6RLpQJpaGqZONtaoG2dTON38Fe3vy1ov3xwnVY0q7rnSYDZufgJTHxtyvcEi4P5WHkgLlP29t6_Up94_-GpbgVRO6C-3Y_TC6rWLnE1jIjfgw9hbqCU_c3W0rOJaiTbxkg9Tzt0-24urNGgA",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuATrZ7ywX96RA6UAfHvzS7rNbV-vrApkyYeNbcBwN2rERGTpIVw1zqfPP8sGHl2t_bdBiwfuKEwNOLGxHVoTW5v2aWh1zOZDIofLGevVFrHt_A_U5uEVexNXhyIwruDe7FqNt1z_SlC7U5SJ4rYhlIW326P_tHCnnCZH3DnPuydgGU04eQQMd_uL_GCUEmH7-3frp40_w-d0zxNU9dvW-i7pp4Sr96eCTFZ53267YOQ",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC3ZKN1PJGV-HOdV0n0BK9fBUcq22AQdkFlY9eqSgVeDKRXbxej5184s1griEO8Oju1Z39X--IIXMmrX9eLY65zS927bqDqHQlXCzXjqHjT9-nJqdhDTD4RM7kpznQxQMfm89KlstrChp34gtmOUky1amkmMddtGySGMQ8Osj7hM-hUrVUfpu9RQqDgkm1dpCL2VHCUVKWFoxqW2FXlpXOIsPkiB1GNN1kCLtT3fVcP",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDv7j9VOiK_Ct8res7HAU23aiUpQS8f3dpuRtDswlzd5UGB80B4VgGSsyvtbsi_iZ6-tXP3MmuQY1_q_frF8ov3cMAoqimLOABWaMxSVSgWV5yJ_9Z0fmMmVItCiWXq9NMSktTq0wGL-RRn6wq_ClUH7CeSzHCjWsaGta2B6h4a4wqOZZGDUHOy6sUCvdaUUrPBDRYTtWO6yTNpSscIdnAazz-ikR8e6c9MKb7H9DkY"
      ],
      colorways: [
        { name: "Rich Goldenrod Yellow", hex: "#EAB308", aura: "rgba(234, 179, 8, 0.45)" },
        { name: "Vivid Hot Pink", hex: "#DB2777", aura: "rgba(219, 39, 119, 0.45)" },
        { name: "Lush Emerald Green", hex: "#059669", aura: "rgba(5, 150, 105, 0.45)" },
        { name: "Electric Royal Violet", hex: "#7C3AED", aura: "rgba(124, 58, 237, 0.45)" },
        { name: "Deep Stealth Obsidian", hex: "#1E293B", aura: "rgba(30, 41, 59, 0.35)" }
      ]
    },

    "fleece": {
      id: "fleece",
      title: "Fleece Sherpa Haven Clog",
      tagline: "Plush Shearling Lined Winter Cold-Weather Edition",
      series: "Seasonal Warmth",
      price: 4495,
      comparePrice: 5495,
      badge: "Cozy Drop",
      rating: "4.9 (980 verified reviews)",
      breadcrumb: "Fleece & Lined",
      description: "Sink into cloud-like warmth with our plush shearling-lined clog. Built on the classic ergonomic foam base, surrounded by cozy insulating lining for cool mornings and AC lounge comfort.",
      specs: [
        { label: "Lining Material", value: "Plush Sherpa Faux Shearling" },
        { label: "Insulation Level", value: "Thermal Grade All-Season Rating" },
        { label: "Sole Build", value: "Non-Slip Indoor/Outdoor Lug Pods" },
        { label: "Fit Guide", value: "Roomy Fit — UK / India Standard" }
      ],
      features: [
        "Warm, fluffy faux-shearling lining keeps toes toasty all winter",
        "Croslite™ foam construction keeps them light and easy to wear",
        "Pivoting heel strap gives a locked-in, secure fit",
        "Great indoors as a luxury house shoe or outdoors on pavement"
      ],
      angles: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDHx1QE92UwptflBNyCvyTPvJ36RBZFzM0ml9fCFHltSjy_UwtzMxZqWp-zzDpAZWaLm4Eq9nEzHmghgV_1pVyIm1A5WY-1vAp6uHcVhpba4HRqz9Fyhepxl5c3jVHTw4wy_MTvs5f36_aeW6peTpvFqMKA2y2VunCi8KQ_--RPsMp_a3frP7CFwdRo-2svTYCiwsnghUVvqhEJyd7oLdtZymc21j7lgFVMpPKNErkd",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB3HtB1RqUGn52D-BR4_PpTLUOFqGaDHlwTwZxz8x8M0JEDKG6ETGfFXxyVsB0Uz0XguRW9eIp3-1cByGpNItb5KnLGY7aWmI3W5OHQGdfTHgI5QSkN0chn7F3BcDvvroBcfvVphrOMJsAk2mzmGFThGrs35FbepeMrwEij7IKl-4xwLjsu0h7T5lb8C6Pb9I-b-7K1znLjVh59G9QOA8EG7qBVqQpiRF3oid9Kk5Ym",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCFf5HaG7QLjOGQrUMCqBLV_0UgVjw4yKLBJeu1WUmdDy0qQXhEL0AdN_REiygpHAxRiIb30PiGFxcUY5-rR3MqnAmqgHyLIxBgPilVu67S2MzjWccvmCGBt23Y0BdNgy5SFETSQAPRBT8qCZte_6iai1njOzWTGtXAXd_2ZN4ciopWYSksaPxXRJI7nuuJp2Vv7laC3ydnlUGfLMbxn7HdcZZjs9yB72glgq6-mu7i",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAgJaQ6j6ZDeq3R7dPQOQvLhQjI3J1FJ9XiIUczpgfVYzhEzX97yYAEFTWnRloaBwgEIRbZie9QV6Y_5eXlmmKtVYTC6RLpQJpaGqZONtaoG2dTON38Fe3vy1ov3xwnVY0q7rnSYDZufgJTHxtyvcEi4P5WHkgLlP29t6_Up94_-GpbgVRO6C-3Y_TC6rWLnE1jIjfgw9hbqCU_c3W0rOJaiTbxkg9Tzt0-24urNGgA"
      ],
      colorways: [
        { name: "Deep Berry Rose", hex: "#BE185D", aura: "rgba(190, 24, 93, 0.45)" },
        { name: "Warm Chestnut Brown", hex: "#92400E", aura: "rgba(146, 64, 14, 0.45)" },
        { name: "Forest Pine Green", hex: "#065F46", aura: "rgba(6, 95, 70, 0.45)" },
        { name: "Midnight Charcoal", hex: "#1F2937", aura: "rgba(31, 41, 55, 0.35)" }
      ]
    },

    "slide": {
      id: "slide",
      title: "Cloud Slide Recovery Slip",
      tagline: "Zero-Gravity Dual-Density Foam Recovery Slide",
      series: "Recovery & Lounge",
      price: 2295,
      comparePrice: 2795,
      badge: "Recovery Slide",
      rating: "4.8 (850 verified reviews)",
      breadcrumb: "Slides & Sandals",
      description: "Engineered specifically for post-sport recovery and poolside relaxation. Features a deep cup heel cradle, dynamic arch contours, and rapid-drain ventilation wave channels for Indian weather.",
      specs: [
        { label: "Footbed Cushioning", value: "Dual-Density LiteRide™ Foam" },
        { label: "Outsole Grip", value: "Wave Hydro-Channel Tread" },
        { label: "Drying Time", value: "Instant-Dry Closed Cell Foam" },
        { label: "Weight", value: "Ultralight 150 grams" }
      ],
      features: [
        "Deep cupped footbed supports and massages tired soles",
        "Two-strap slide upper holds feet firmly without chafing",
        "Hydrophobic material will never absorb water or moisture",
        "Easy slip-on silhouette ready for gym, beach, or living room"
      ],
      angles: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCKXGxUIinm_-OZFzT6rQPnmHf2cFa-ZwdlWQWPEpunJLXzOxjdqOAkW2c17QAPGXnm1a0dWvEDqEIF0oUqvuww96OL4ShcZOvEsKAWT4liXPd1Tx2tNWhfq25n2kHBax52xhQpliJg3qEIBhqnTqMLx0MUsuq8k82TWf_vX21BGUrGAmVk9FRnCqsCQ4sKe8AIZnBAjIEIIKb9ZVtMNtFKNH7iROIRI6GOFcQj7ZOb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBgznRSgcHG3Uv36WjVv228shdB581GsD_5tVY5mleYwMh-I5dJtRBy2-FutlPhyZz6pEcfmQefmqdxI-wNzmO6q9U5f_lkpQdcZGI9GlBH2ptyyp2F_NpfA3Sqq8BbLlA6pvId8m8q7xvSd2K-wHWb0tyCKOy8URnttEyEuLXNty3qRL0Nx1joCADzfp5F5_IIrFrPXIN-8XVcPgT9mA00DXF0Lhqzm4Hn73E8Qjc6",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCKXGxUIinm_-OZFzT6rQPnmHf2cFa-ZwdlWQWPEpunJLXzOxjdqOAkW2c17QAPGXnm1a0dWvEDqEIF0oUqvuww96OL4ShcZOvEsKAWT4liXPd1Tx2tNWhfq25n2kHBax52xhQpliJg3qEIBhqnTqMLx0MUsuq8k82TWf_vX21BGUrGAmVk9FRnCqsCQ4sKe8AIZnBAjIEIIKb9ZVtMNtFKNH7iROIRI6GOFcQj7ZOb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBgznRSgcHG3Uv36WjVv228shdB581GsD_5tVY5mleYwMh-I5dJtRBy2-FutlPhyZz6pEcfmQefmqdxI-wNzmO6q9U5f_lkpQdcZGI9GlBH2ptyyp2F_NpfA3Sqq8BbLlA6pvId8m8q7xvSd2K-wHWb0tyCKOy8URnttEyEuLXNty3qRL0Nx1joCADzfp5F5_IIrFrPXIN-8XVcPgT9mA00DXF0Lhqzm4Hn73E8Qjc6"
      ],
      colorways: [
        { name: "Oceanic Deep Teal", hex: "#0284C7", aura: "rgba(2, 132, 199, 0.45)" },
        { name: "Desert Sand Terracotta", hex: "#B45309", aura: "rgba(180, 83, 9, 0.45)" },
        { name: "Vibrant Citrus Lime", hex: "#65A30D", aura: "rgba(101, 163, 13, 0.45)" },
        { name: "Onyx Core Stealth", hex: "#1E293B", aura: "rgba(30, 41, 59, 0.35)" }
      ]
    },

    "citrus-classic": {
      id: "citrus-classic",
      title: "CrocKicks Citrus Classic",
      tagline: "Vibrant Summer Neon Drop with UV-Guard Pigments",
      series: "Archive S/S 2025",
      price: 2995,
      comparePrice: 3495,
      badge: "Best Seller",
      rating: "5.0 (2,100 reviews)",
      breadcrumb: "Summer Neon",
      description: "A high-energy neon drop engineered with our proprietary UV-Guard color lock foam so your sunny citrus kicks stay radiant under tropical sunlight without fading.",
      specs: [
        { label: "Color Pigment", value: "UV-Guard Tropical Sun Proof" },
        { label: "Ventilation", value: "13 Air Ports + 6 Charm Slots" },
        { label: "Comfort Class", value: "Dual Crocs Comfort™" },
        { label: "Tread", value: "Non-Marking Outsole" }
      ],
      features: [
        "Eye-popping neon citrus coloration makes a statement everywhere",
        "Waterproof, easy to sanitize, and fast drying in monsoon rains",
        "Pivoting heel strap for customizable fit"
      ],
      angles: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDVLjW0ghuBf6czQWSoIH2p5_90YUSEHPQ6w2BTHxTRusonXy77JlFp88XLMtJYzJZdIeir9u_VIq3eOAsgwkuiyLD2bQIhSyg084EfQFEvPv8ylBShlsqxe5DZBcr4f89JcjOKPM7hcAQvI4gGJOrlyUDGlCfdfImAVxDaOnkhx4fPAGx3_JDZl9lHrFGib8n-Sq1Z6FZbLbqrUPNmtgj1mkvLG_de5r0QDDaux0Rz",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuA7bTx32njHtcyvERpslc_GtsCenoIyYlulaMXT7OEXeQhm072jTFM7-yX0HXz-qmK5vKTMW-7JVd14p7uFlcErNa_px8LLYW0NSR_O0x1eMBoBMru17wioljnrKWqafX5G0a35OUMJxUC30N7EtbuoRArxiaKu6TvF0m1ytuXez9DKJHZpPJm5lr3An4xf_RT1c_vpNORy2STUA_OsyZ0loobJo29i9ISM0WlroBMY",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAX78HCGL0cRnINHirkJgmW4dLfaXj6xY8Ujl0vTCUFXIxk3A9I2a3WTF3MGTHxn81QnX6eIIKc3gG9X9oFrFcSyO6tYV0mPl_BwPzaq_GejoT4zvdUDa18v3OlZtpFsoaREmmPihW23F1U_k01UxbbMXifFgdC8z_szdB-bar7kCklsDXM1So4xKfL14AX7KBlVSrdwZXOEefUh5486WDmKOKW-pLJoBx-3BK3wtiC",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDv7j9VOiK_Ct8res7HAU23aiUpQS8f3dpuRtDswlzd5UGB80B4VgGSsyvtbsi_iZ6-tXP3MmuQY1_q_frF8ov3cMAoqimLOABWaMxSVSgWV5yJ_9Z0fmMmVItCiWXq9NMSktTq0wGL-RRn6wq_ClUH7CeSzHCjWsaGta2B6h4a4wqOZZGDUHOy6sUCvdaUUrPBDRYTtWO6yTNpSscIdnAazz-ikR8e6c9MKb7H9DkY"
      ],
      colorways: [
        { name: "Vibrant Citron Gold", hex: "#EAB308", aura: "rgba(234, 179, 8, 0.45)" },
        { name: "Fiery Blood Orange", hex: "#C2410C", aura: "rgba(194, 65, 12, 0.45)" },
        { name: "Electric Lime Shock", hex: "#4D7C0F", aura: "rgba(77, 124, 15, 0.45)" },
        { name: "Punch Cerise Berry", hex: "#BE123C", aura: "rgba(190, 18, 60, 0.45)" }
      ]
    },

    "stomp-platform": {
      id: "stomp-platform",
      title: "Cloud Stomp Mega Platform",
      tagline: "Exaggerated 6.5cm Lug Sole Tread Couture Stance",
      series: "Lug Sole Couture",
      price: 5495,
      comparePrice: 6995,
      badge: "Mega Lug",
      rating: "4.9 (1,230 reviews)",
      breadcrumb: "Stomp Series",
      description: "Dramatic proportions, aggressive lugged rubber treads, and excessive foam heights make the Stomp Platform the statement shoe of Indian streetwear.",
      specs: [
        { label: "Lift Height", value: "6.5cm (2.5 inches) Lug Stance" },
        { label: "Tread Depth", value: "4mm Aggressive Monsoon Traction" },
        { label: "Weight", value: "Solid Lightweight Foam Build" },
        { label: "Collar", value: "Low-Cut Ergonomic Slip" }
      ],
      features: [
        "Bold, exaggerated lug sole that grips wet city streets",
        "Arch-supportive footbed for comfortable all-day walking",
        "Signature Croslite™ upper with Jibbitz™ charm customization"
      ],
      angles: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBzLaUZr90qe2mHg2vV0io_uzyPxGaf_NRBkWJmsdjKtCG1reyDO4H0YeKuZj3MiTFc3Gb02IUijwPVruA-5mG-TtuepTFTpwktkPui3PiyR1bqfugejjbhZA0_dhEF02JDYafW-ydCLzBpPVlnOkzCke1cNvVxRz43YuG1bCZt5H0-jzGaNloCSGg2PLUrBJG85Xmm9d4SjkdeTlY7UOTZiccORzRnyCt6CzQ68xB7",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCl23lpRhf2kaiJPnv-03Rw63pvAYhlwmDnQZcNXDZuceH_Z5eBCJ5_wZBAPt9fH2w-fCVJXsdTHzpGXmfAMLrdIlxODzPMoGGdK9sd9Uwe5pllgZB85EDELjF7oH8RGXJaMrQ-Oa2UN7KFdG4hMoFBdQBVqd8mHZYVvyv4LpeoxHOsCkaVTu7G1cKwMckc-W7xarpxnheaQgvpNuTebR1clvmkGrXjNmkjBO77tbma",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuC3ZKN1PJGV-HOdV0n0BK9fBUcq22AQdkFlY9eqSgVeDKRXbxej5184s1griEO8Oju1Z39X--IIXMmrX9eLY65zS927bqDqHQlXCzXjqHjT9-nJqdhDTD4RM7kpznQxQMfm89KlstrChp34gtmOUky1amkmMddtGySGMQ8Osj7hM-hUrVUfpu9RQqDgkm1dpCL2VHCUVKWFoxqW2FXlpXOIsPkiB1GNN1kCLtT3fVcP",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDv7j9VOiK_Ct8res7HAU23aiUpQS8f3dpuRtDswlzd5UGB80B4VgGSsyvtbsi_iZ6-tXP3MmuQY1_q_frF8ov3cMAoqimLOABWaMxSVSgWV5yJ_9Z0fmMmVItCiWXq9NMSktTq0wGL-RRn6wq_ClUH7CeSzHCjWsaGta2B6h4a4wqOZZGDUHOy6sUCvdaUUrPBDRYTtWO6yTNpSscIdnAazz-ikR8e6c9MKb7H9DkY"
      ],
      colorways: [
        { name: "Deep Olive Drab", hex: "#4D533C", aura: "rgba(77, 83, 60, 0.45)" },
        { name: "Rich Crimson Lug", hex: "#991B1B", aura: "rgba(153, 27, 27, 0.45)" },
        { name: "Stealth Charcoal Black", hex: "#18181B", aura: "rgba(24, 24, 27, 0.35)" },
        { name: "Warm Amber Lug", hex: "#B45309", aura: "rgba(180, 83, 9, 0.45)" }
      ]
    },

    "sherpa-pink": {
      id: "sherpa-pink",
      title: "Sherpa Hug Pink Edition",
      tagline: "Velvet Fleece Interior & Soft Cloud Foam Shell",
      series: "Cozy Atelier",
      price: 4495,
      comparePrice: 5495,
      badge: "Cozy Luxe",
      rating: "4.9 (1,850 reviews)",
      breadcrumb: "Pastel Warmth",
      description: "Our signature Sherpa Hug in cotton-candy pastel pink. Lined with ultra-soft high-loft microfleece that wraps your foot in continuous gentle warmth for winter in North India.",
      specs: [
        { label: "Insulation", value: "High-Loft Microfleece Lining" },
        { label: "Strap", value: "Padded Pivoting Heel Lock" },
        { label: "Sole", value: "Non-Slip Croslite™" }
      ],
      features: [
        "Unrivaled warmth for cool mornings and winter lounging",
        "Lightweight Croslite™ foam keeps feet from fatiguing",
        "Pivoting heel strap gives a locked-in, secure fit"
      ],
      angles: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCFf5HaG7QLjOGQrUMCqBLV_0UgVjw4yKLBJeu1WUmdDy0qQXhEL0AdN_REiygpHAxRiIb30PiGFxcUY5-rR3MqnAmqgHyLIxBgPilVu67S2MzjWccvmCGBt23Y0BdNgy5SFETSQAPRBT8qCZte_6iai1njOzWTGtXAXd_2ZN4ciopWYSksaPxXRJI7nuuJp2Vv7laC3ydnlUGfLMbxn7HdcZZjs9yB72glgq6-mu7i",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDHx1QE92UwptflBNyCvyTPvJ36RBZFzM0ml9fCFHltSjy_UwtzMxZqWp-zzDpAZWaLm4Eq9nEzHmghgV_1pVyIm1A5WY-1vAp6uHcVhpba4HRqz9Fyhepxl5c3jVHTw4wy_MTvs5f36_aeW6peTpvFqMKA2y2VunCi8KQ_--RPsMp_a3frP7CFwdRo-2svTYCiwsnghUVvqhEJyd7oLdtZymc21j7lgFVMpPKNErkd",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuB3HtB1RqUGn52D-BR4_PpTLUOFqGaDHlwTwZxz8x8M0JEDKG6ETGfFXxyVsB0Uz0XguRW9eIp3-1cByGpNItb5KnLGY7aWmI3W5OHQGdfTHgI5QSkN0chn7F3BcDvvroBcfvVphrOMJsAk2mzmGFThGrs35FbepeMrwEij7IKl-4xwLjsu0h7T5lb8C6Pb9I-b-7K1znLjVh59G9QOA8EG7qBVqQpiRF3oid9Kk5Ym",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAgJaQ6j6ZDeq3R7dPQOQvLhQjI3J1FJ9XiIUczpgfVYzhEzX97yYAEFTWnRloaBwgEIRbZie9QV6Y_5eXlmmKtVYTC6RLpQJpaGqZONtaoG2dTON38Fe3vy1ov3xwnVY0q7rnSYDZufgJTHxtyvcEi4P5WHkgLlP29t6_Up94_-GpbgVRO6C-3Y_TC6rWLnE1jIjfgw9hbqCU_c3W0rOJaiTbxkg9Tzt0-24urNGgA"
      ],
      colorways: [
        { name: "Vivid Hot Fuchsia", hex: "#C026D3", aura: "rgba(192, 38, 211, 0.45)" },
        { name: "Deep Ruby Rose", hex: "#BE123C", aura: "rgba(190, 18, 60, 0.45)" },
        { name: "Royal Plum Velvet", hex: "#6B21A8", aura: "rgba(107, 33, 168, 0.45)" }
      ]
    },

    "lagoon-slide": {
      id: "lagoon-slide",
      title: "Lagoon Hydro Recovery Slide",
      tagline: "Water-Channelling Grip Pods for Pool & Recovery",
      series: "Hydro Tech",
      price: 2495,
      comparePrice: 2995,
      badge: "Waterproof Grip",
      rating: "4.8 (760 reviews)",
      breadcrumb: "Hydro Active",
      description: "Molded hydro-grip wave grooves channel surface water away instantly, preventing slipping in showers, monsoon puddles, and resort poolside decks.",
      specs: [
        { label: "Hydro Drainage", value: "3D Wave Channel Surface" },
        { label: "Water Rating", value: "100% Submersible Hydrophobic" },
        { label: "Tread", value: "Non-Skid Wet Surface Compound" }
      ],
      features: [
        "Rapid water dispersion keeps feet stable and dry",
        "Deep heel cup cradles feet after strenuous sports",
        "Easy slip-on comfort with arch-contoured footbed"
      ],
      angles: [
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBgznRSgcHG3Uv36WjVv228shdB581GsD_5tVY5mleYwMh-I5dJtRBy2-FutlPhyZz6pEcfmQefmqdxI-wNzmO6q9U5f_lkpQdcZGI9GlBH2ptyyp2F_NpfA3Sqq8BbLlA6pvId8m8q7xvSd2K-wHWb0tyCKOy8URnttEyEuLXNty3qRL0Nx1joCADzfp5F5_IIrFrPXIN-8XVcPgT9mA00DXF0Lhqzm4Hn73E8Qjc6",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCKXGxUIinm_-OZFzT6rQPnmHf2cFa-ZwdlWQWPEpunJLXzOxjdqOAkW2c17QAPGXnm1a0dWvEDqEIF0oUqvuww96OL4ShcZOvEsKAWT4liXPd1Tx2tNWhfq25n2kHBax52xhQpliJg3qEIBhqnTqMLx0MUsuq8k82TWf_vX21BGUrGAmVk9FRnCqsCQ4sKe8AIZnBAjIEIIKb9ZVtMNtFKNH7iROIRI6GOFcQj7ZOb",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuBgznRSgcHG3Uv36WjVv228shdB581GsD_5tVY5mleYwMh-I5dJtRBy2-FutlPhyZz6pEcfmQefmqdxI-wNzmO6q9U5f_lkpQdcZGI9GlBH2ptyyp2F_NpfA3Sqq8BbLlA6pvId8m8q7xvSd2K-wHWb0tyCKOy8URnttEyEuLXNty3qRL0Nx1joCADzfp5F5_IIrFrPXIN-8XVcPgT9mA00DXF0Lhqzm4Hn73E8Qjc6",
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCKXGxUIinm_-OZFzT6rQPnmHf2cFa-ZwdlWQWPEpunJLXzOxjdqOAkW2c17QAPGXnm1a0dWvEDqEIF0oUqvuww96OL4ShcZOvEsKAWT4liXPd1Tx2tNWhfq25n2kHBax52xhQpliJg3qEIBhqnTqMLx0MUsuq8k82TWf_vX21BGUrGAmVk9FRnCqsCQ4sKe8AIZnBAjIEIIKb9ZVtMNtFKNH7iROIRI6GOFcQj7ZOb"
      ],
      colorways: [
        { name: "Deep Oceanic Cerulean", hex: "#0369A1", aura: "rgba(3, 105, 161, 0.45)" },
        { name: "Electric Emerald Aqua", hex: "#0F766E", aura: "rgba(15, 118, 110, 0.45)" },
        { name: "Vibrant Mango Gold", hex: "#D97706", aura: "rgba(217, 119, 6, 0.45)" },
        { name: "Onyx Stealth Noir", hex: "#18181B", aura: "rgba(24, 24, 27, 0.35)" }
      ]
    }
  };

  function getProductById(id) {
    if (!id) return CATALOG["platform"];
    const key = id.toLowerCase().trim();
    return CATALOG[key] || CATALOG["platform"];
  }

  function getAllProducts() {
    return Object.values(CATALOG);
  }

  function getRelatedProducts(currentId, count = 4) {
    const all = Object.values(CATALOG);
    const others = all.filter(p => p.id !== currentId);
    return others.slice(0, count);
  }

  return {
    CATALOG,
    getProductById,
    getAllProducts,
    getRelatedProducts
  };
})();

if (typeof window !== 'undefined') {
  window.CrocProducts = CrocProducts;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CrocProducts;
}
