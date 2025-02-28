import React from 'react';

function ProfilePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-8">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-md w-full">
        <div className="flex flex-col items-center">
          <img
            className="w-32 h-32 rounded-full mb-4"
            src="https://scontent-sin11-1.xx.fbcdn.net/v/t39.30808-6/453405542_10222283158626870_5157726667394350197_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=aa7094&_nc_eui2=AeHzEfCD34ucPpkvithSElUsnxlXuNAfbRmfGVe40B9tGXK8gDOKieawbYCJgAkJMXE6VN21qoXL7sXNTRiMqOdc&_nc_ohc=gbFXOVXW2c4Q7kNvgG8G4UH&_nc_oc=AdhIse1S6o7I9D1hLUCT0GFrFnTRiqEwfHXwAuWtYjTLy3ntixPgaxy7aCjg_Z9ZO-lKY9mAv0iapqDulPb1QrdA&_nc_zt=23&_nc_ht=scontent-sin11-1.xx&_nc_gid=AJFb3qrqXKhA6F9FAA748_U&oh=00_AYAY2kSQkhDVuGjvbAOP9e3GjKHmRaUcYEeBsaqDOP0CJw&oe=67C7B853"
            alt="Wallace Louis Tjang"
          />
          <h2 className="text-2xl font-semibold mb-2">Wallace Louis Tjang</h2>
          <p className="text-gray-600 text-center">
            I am a computer science student and my hobby is basketball.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;
