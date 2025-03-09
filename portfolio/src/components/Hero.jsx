import { profileData } from "../data/profileData";
import { theme } from "../utils/theme"; // Import the theme

const Hero = () => {
  return (
    <section className={`${theme.secondary} ${theme.textPrimary} py-20 px-6`}>
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side: Text */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">About Me</h2>
          <p className={`text-lg ${theme.textSecondary} mt-4`}>{profileData.bio}</p>
          <p className={`mt-4 ${theme.textSecondary}`}>{profileData.details}</p>

       {/* Skills */}
       <div className="mt-6 flex flex-wrap gap-4">
            <span className="bg-blue-600 px-4 py-2 rounded-full text-sm">3D Animation</span>
            <span className="bg-green-600 px-4 py-2 rounded-full text-sm">Character Rigging</span>
            <span className="bg-purple-600 px-4 py-2 rounded-full text-sm">Storyboarding</span>
            <span className="bg-yellow-500 px-4 py-2 rounded-full text-sm">Motion Graphics</span>
          </div>

          {/* Social Media Icons */}
          <div className="mt-6 flex gap-4">
            {profileData.socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`hover:scale-110 transition-transform text-3xl ${theme.iconColor}`}
              >
                <social.icon />
              </a>
            ))}
          </div>
        </div>

        {/* Right Side: Profile Image */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src={profileData.profileImage}
            alt="Profile"
            className="w-64 h-64 object-cover rounded-full border-4 border-gray-700 shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};
  
  export default Hero;
  