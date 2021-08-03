import React from "react";

const Intro = () => {
  return (
    <div className="relative py-3 w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-indigo-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-1 sm:rounded-3xl"></div>
      <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
        <div className="w-full lg:flex items-center justify-between">
          <div className="w-full mb-12 lg:max-w-sm lg:mb-0">
            <div style={{ transformOrigin: "50% 50% 0px" }}>
              <p className="mb-4 text-base font-medium text-gray-800">
                “Lessonspace is great for a wide variety of subjects! It is as
                simple as paper on pen with nothing extra for the student or
                tutor to install. The different board options make classes
                interactive and fun and allows for a versatile learning
                environment. After using this online space, I will not use any
                other one again!”
              </p>
              <div className="flex items-center mt-6">
                <img
                  src="/images/users/emmy.jpg"
                  alt="Emmy B."
                  className="w-12 h-12 rounded-full"
                />
                <p className="mb-0 ml-4 leading-tight text-blue-600">
                  <strong>Emmy B.</strong>
                  <br />
                  <small className="text-gray-600">STEM Tutor</small>
                </p>
              </div>
            </div>
          </div>

          <div className="flex-grow rounded-xl">
            <iframe
              className="w-full rounded-xl"
              // width="560"
              height="500"
              src="https://go.room.sh?room=d6da6f95-33b4-4b79-afe7-2646f3b624d9&server=https://zah.room.sh&disabledFeatures=av%2Cfullscreen&enabledFeatures=avLauncher,whiteboard.equations&theme=%7B%22color%22%3A%22%235766FA%22%2C%22corners%22%3A%22full%22%2C%22hue%22%3A240%7D"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
