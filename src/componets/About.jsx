import React from "react";

const About = () => {
  return (
    <>
      <div className="main-header font-semibold text-6xl text-[#2F4F4F] text-center">
        <h1>About us</h1>
      </div>

      {/* card section */}

      {/* first card */}
      <div className="card-container mt-12 p-7 text-[#2F4F4F] bg-[#E0E0E0] rounded-xl card  w-4/6 m-auto">
        <div className="border-b-2 border-black header text-[#2F4F4F] text-4xl">
          <h3>About PassLocker:</h3>
        </div>

        <div className="mt-4 card-body">
          <p>
            Welcome to [App Name] We are dedicated to helping you securely store
            and manage your passwords across various platforms. In today's
            digital world, where managing multiple accounts and their passwords
            can be overwhelming, our app ensures your credentials are safe,
            encrypted, and easily accessible only to you. With features like
            advanced encryption and two-factor authentication (2FA), we
            prioritize the security of your data above all else.
          </p>
        </div>
      </div>

      {/* second card */}
      <div className="card-container mt-12 p-7 text-[#2F4F4F] bg-[#E0E0E0] rounded-xl card  w-4/6 m-auto">
        <div className="border-b-2 border-black header text-[#2F4F4F] text-4xl">
          <h3>Why We Built:</h3>
        </div>

        <div className="mt-4 card-body">
          <p>
            Why We Built This In a time when digital security is more important
            than ever, many users struggle to keep track of their passwords
            across multiple platforms. The risk of using the same password for
            multiple accounts, or forgetting complex passwords, can lead to
            breaches in security. Our goal was to create a simple, yet powerful
            solution that helps users manage their passwords with ease, while
            ensuring maximum security through industry-standard encryption
            techniques.
          </p>
        </div>
      </div>

      {/* third card */}
      <div className="card-container mt-12 p-7 text-[#2F4F4F] bg-[#E0E0E0] rounded-xl card  w-4/6 m-auto">
        <div className="border-b-2 border-black header text-[#2F4F4F] text-4xl">
          <h3>Security Philosophy:</h3>
        </div>

        <div className="mt-4 card-body">
          <p>
            Our Security Philosophy At PassLocker , we understand that security
            is non-negotiable when it comes to managing sensitive information
            like passwords. That’s why we use AES-256 encryption to store your
            passwords securely and implement two-factor authentication (2FA) for
            an extra layer of protection. We believe in keeping your data
            private, and only you have access to your stored credentials—no one
            else, including us.
          </p>
        </div>
      </div>


      {/* forth card */}
      <div className="card-container mt-12 p-7 text-[#2F4F4F] bg-[#E0E0E0] rounded-xl card  w-4/6 m-auto">
        <div className="border-b-2 border-black header text-[#2F4F4F] text-4xl">
          <h3>Team or Vision:</h3>
        </div>

        <div className="mt-4 card-body">
          <p>
            Our Vision We are passionate about building secure, user-friendly
            tools that empower individuals to take control of their digital
            security. With every update and new feature, our aim is to make your
            online experience both safer and simpler.
          </p>
        </div>
      </div>
      

      <footer className="text-center mt-12 bg-white p-4 font-semibold">created by-vatsal munjpara 	&#169;copywrite all rights are reserved</footer>
    </>
  );
};

export default About;
