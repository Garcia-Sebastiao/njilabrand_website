/* eslint-disable @next/next/no-img-element */
export function OurTeam() {
  return (
    <div className="w-full flex flex-col items-start gap-y-20 mx-auto max-w-6xl">
      <div className="w-full flex gap-x-12 items-center">
        <h2 className="text-6xl text-nowrap font-black text-primary">
          Our <span className="text-secondary">Team</span>
        </h2>

        <div className="h-1 bg-blue-shade-dark w-44" />

        <p className="text-blue-shade-dark">
          We are a team of passionate professionals dedicated to delivering
          exceptional results for our clients.
        </p>
      </div>

      <div className="w-full">
        {Array.from({ length: 4 }).map((_, index) => {
          const reverse = index % 2 === 1;

          return (
            <div key={index} className="grid grid-cols-2">
              {Array.from({ length: 2 }).map((_, i) => (
                <div key={i} className="grid grid-cols-2">
                  <div
                    className={`col-span-1 flex items-center justify-center p-6 ${
                      reverse ? "order-2" : "order-1"
                    }`}
                  >
                    <div className="flex flex-col items-center">
                      <h2 className="text-blue-shade-dark font-black text-2xl">
                        Crisvan
                      </h2>
                      <span className="text-blue-shade-dark text-lg">
                        CEO & Founder
                      </span>
                    </div>
                  </div>

                  <div
                    className={`col-span-1 h-80 rounded-3xl overflow-hidden ${i > 0 ? "bg-blue-shade" : "bg-primary"}  ${
                      reverse ? "order-1" : "order-2"
                    }`}
                  >
                    <img
                      src="/images/model-01.png"
                      alt="Person"
                      className="w-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
