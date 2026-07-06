import { motion } from "motion/react";
import samsungLogo from "../../assets/images/logo/Samsung.png";
import lionLogo from "../../assets/images/logo/Lion.png";
import honorLogo from "../../assets/images/logo/Honor.png";
import hpLogo from "../../assets/images/logo/HP.png";
import singerLogo from "../../assets/images/logo/Singer.png";
import nubiaLogo from "../../assets/images/logo/Nubia.png";
import slonLogo from "../../assets/images/logo/S-LON.png";
import cameralkLogo from "../../assets/images/logo/Camara.png";
import asusLogo from "../../assets/images/logo/Asus.png";
import lenovoLogo from "../../assets/images/logo/Lenovo.png";
import nestleLogo from "../../assets/images/logo/Nestle.png";
import singhgiriLogo from "../../assets/images/logo/Singhagiri.png";
import dblLogo from "../../assets/images/logo/DBL.png";
import vivoLogo from "../../assets/images/logo/Vivo.png";
import abansLogo from "../../assets/images/logo/Abans.png";
import idlLogo from "../../assets/images/logo/IDL.png";
import jkoaLogo from "../../assets/images/logo/jkoa.png";
import { useBrandLogos } from "../hooks/useBrandLogos";
import { toMediaUrl, type BrandLogo } from "../lib/api";

const fallbackBrandLogos: BrandLogo[] = [
  { name: "Samsung", logoUrl: samsungLogo },
  { name: "Lion Brewery", logoUrl: lionLogo },
  { name: "Honor", logoUrl: honorLogo },
  { name: "HP", logoUrl: hpLogo },
  { name: "Singer", logoUrl: singerLogo },
  { name: "Nubia", logoUrl: nubiaLogo },
  { name: "S-Lon", logoUrl: slonLogo },
  { name: "CameraLK", logoUrl: cameralkLogo },
  { name: "Asus", logoUrl: asusLogo },
  { name: "Lenovo", logoUrl: lenovoLogo },
  { name: "Nestle", logoUrl: nestleLogo },
  { name: "Singhagiri", logoUrl: singhgiriLogo },
  { name: "DBL", logoUrl: dblLogo },
  { name: "Abans", logoUrl: abansLogo },
  { name: "IDL", logoUrl: idlLogo },
  { name: "JKOA", logoUrl: jkoaLogo },
];


export function BrandLogoMarquee() {
  const { brandLogos } = useBrandLogos(fallbackBrandLogos);
  const visibleLogos = brandLogos.filter((brand) => brand.logoUrl);

  if (!visibleLogos.length) return null;

  const marqueeItems = [...visibleLogos, ...visibleLogos];

  return (
    <section className="py-20 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <p className="text-sm uppercase tracking-widest text-slate-500">
          Trusted By Leading Brands
        </p>
      </motion.div>

      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-slate-50 to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max gap-16 animate-marquee whitespace-nowrap">
          {marqueeItems.map((brand, index) => {
            const image = toMediaUrl(brand.logoUrl);
            const logo = (
              <img
                src={image}
                alt={brand.name}
                className="max-h-12 max-w-[150px] object-contain transition hover:grayscale-0 hover:opacity-100"
                loading="lazy"
              />
            );

            return (
              <div
                key={`${brand.id ?? brand.name}-${index}`}
                className="h-16 min-w-[150px] flex items-center justify-center"
              >
                {brand.websiteUrl ? (
                  <a href={brand.websiteUrl} target="_blank" rel="noopener noreferrer">
                    {logo}
                  </a>
                ) : (
                  logo
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
