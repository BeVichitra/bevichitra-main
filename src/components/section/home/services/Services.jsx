import ServiceText from "../services/ServiceText";
import ServiceCard from "../services/ServiceCard";
import ServiceMobile from "../services/ServiceMobile";

export default function Services() {
  return (
    <>
      {/* DESKTOP ONLY */}
      <section className="mx-32 py-32 hidden xl:block bg-(--bg-main)">
        <div className="flex justify-between gap-24 relative">

          <div className="w-full max-w-md relative">
            <div className="sticky top-32">
              <ServiceText/>
            </div>
          </div>

          <div className="w-full max-w-md">
            <ServiceCard />
          </div>

        </div>
      </section>

      {/* MOBILE + TABLET ONLY */}
      <div className="xl:hidden bg-(--bg-main)">
        <ServiceMobile />
      </div>
    </>
  );
}