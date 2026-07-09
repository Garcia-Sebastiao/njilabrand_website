export function Testimonials() {
  return (
    <div className="w-full relative">
      <div className="w-full relative flex flex-col gap-y-8 z-10 max-w-6xl mx-auto">
        <div className="w-full flex gap-x-12 items-center">
          <h2 className="text-6xl text-nowrap font-black text-blue-shade-dark">
            Trusted <span className="text-primary">Clients</span>
          </h2>

          <div className="h-1 bg-blue-shade-dark w-44" />

          <p className="text-blue-shade-dark">
            We are a team of passionate professionals dedicated to delivering
            exceptional results for our clients.
          </p>
        </div>
      </div>
    </div>
  );
}
