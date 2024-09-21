import React from "react";

const Services = () => {
  return (
    <>
      <h1 className="text-center font-seimibold text-7xl text-[#505050]">
        Our Services
      </h1>

      <div className="container-1 flex justify-evenly mt-7 ">
        {/* card 1 */}
        <div className="card bg-white w-80 p-7 rounded-2xl">
          <div className="image-area">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/021/179/570/small/fills-in-the-profile-data-form-businessman-fills-in-the-profile-data-form-free-png.png"
              alt=""
            />
          </div>

          <div className="header text-center text-[#505050]">
            <h2 className="text-2xl">User Registration and Login:</h2>
          </div>
          <div className="text text-[#505050]">
            Sign-up: Users can create an account using email and password.
            Login: Secure user login with email and password. Session
            Management: Use JWT for secure session managemen
          </div>
        </div>

        <div className="card bg-white w-80 p-7 rounded-2xl">
          <div className="image-area">
            <img
              src="https://www.purpleguys.com/wp-content/uploads/1970/01/Two-Factor-Authentication-2FA-768x513.jpg"
              alt=""
            />
          </div>

          <div className="header text-center text-[#505050]">
            <h2 className="text-2xl">Two-Factor Authentication (2FA):</h2>
          </div>
          <div className="text text-[#505050]">
            Option to enable 2FA for additional security during login.
            Integration with Google Authenticator or Twilio for OTP-based 2FA
          </div>
        </div>

        <div className="card bg-white w-80 p-7 rounded-2xl">
          <div className="image-area">
            <img
              src="https://www.dashlane.com/_next/image?url=https%3A%2F%2Fripleyprd.wpengine.com%2Fwp-content%2Fuploads%2F2022%2F11%2FHow-Password-Managers-Work-Beginners-Guide_Online-Password-Manager-1024x645.png&w=1080&q=75"
              alt=""
            />
          </div>

          <div className="header text-center text-[#505050]">
            <h2 className="text-2xl"> Password Storage:</h2>
          </div>
          <div className="text text-[#505050]">
            Users can securely store passwords for various online platforms
            (e.g., Instagram, Facebook, Paytm). Each password is encrypted
            before being saved to the database.
          </div>
        </div>
      </div>

      <div className="container-1 flex justify-evenly mt-7">
        {/* card 4 */}
        <div className="card bg-white w-80 p-7 rounded-2xl">
          <div className="image-area">
            <img
              src="https://www.okta.com/sites/default/files/styles/1640w_scaled/public/media/image/2021-10/id101-password-encryption.png?itok=7hI0-cJS"
              alt=""
            />
          </div>

          <div className="header text-center text-[#505050]">
            <h2 className="text-2xl">Password Encryption:</h2>
          </div>
          <div className="text text-[#505050]">
            AES-256 encryption: Ensures passwords are encrypted at the client
            side before being stored in the database. Unique encryption keys for
            each user to enhance data security.
          </div>
        </div>

        <div className="card bg-white w-80 p-7 rounded-2xl">
          <div className="image-area">
            <img
              src="https://t4.ftcdn.net/jpg/07/18/25/89/240_F_718258947_H7cwTFD4xVJ9hM3LlNDNl9MgGBDrldND.jpg"
              alt=""
            />
          </div>

          <div className="header text-center text-[#505050]">
            <h2 className="text-2xl">Password Management:</h2>
          </div>
          <div className="text text-[#505050]">
            Users can add, update, and delete passwords for their platforms.
            Passwords can be copied to the clipboard for easy access.
          </div>
        </div>

        <div className="card bg-white w-80 p-7 rounded-2xl">
          <div className="image-area">
            <img
              src="https://img.freepik.com/free-photo/representations-user-experience-interface-design_23-2150038909.jpg?size=626&ext=jpg&ga=GA1.1.2036388757.1703600071&semt=ais_hybrid"
              alt=""
            />
          </div>

          <div className="header text-center text-[#505050]">
            <h2 className="text-2xl"> User-Friendly Interface:</h2>
          </div>
          <div className="text text-[#505050]">
            Intuitive and easy-to-navigate UI/UX for managing passwords.
            Responsive design for use across devices (desktop, mobile, tablet).
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
