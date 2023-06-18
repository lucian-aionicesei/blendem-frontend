import { useMemo } from "react";
import { GoogleMap, useLoadScript, MarkerF } from "@react-google-maps/api";
import ContactCard from "@/components/ContactCard";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const Works = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyDh6GMI6kD43oT_zpAf81n0q16i75h-GP8",
  });

  if (!isLoaded) return <div>Loading...</div>;

  return <Map />;
};

function Map() {
  const center = useMemo(
    () => ({
      lat: 45.862,
      lng: 25.841,
    }),
    []
  );

  const options = {
    disableDefaultUI: true, // Disable the default map controls
  };

  return (
    <main className="flex pt-20 xl:pt-0 flex-col gap-y-16">
      <section className="sm:mx-5 md:mx-14 mb-12 lg:mb-16 xl:grid grid-cols-12 h-screen items-center">
        <article className="px-5 py-20 sm:px-0 text-base col-start-1 col-span-4 flex flex-col justify-center">
          <ContactCard
            location="Parcul Industrial Sfantu Gheorghe Cart. Campul Frumos nr.5 520072"
            email="contact@blendemproduction.com"
          />
        </article>
        <div className=" col-span-6 col-end-12 aspect-video">
          <GoogleMap
            id="2ab65ca5eadc5cfb"
            zoom={16}
            center={center}
            mapContainerStyle={containerStyle}
            options={options}
          >
            <MarkerF position={center} />
          </GoogleMap>
        </div>
      </section>
    </main>
  );
}

export default Works;
