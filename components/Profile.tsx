import Image from 'next/image';

export default function Profile() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-10 md:py-16 text-lg px-4 md:px-section items-center">
      <div className="flex flex-col md:flex-row justify-start items-center">
        <Image src="/images/avatar.png" height={150} width={150} />
        <div className="md:ml-6 mt-6 text-center md:text-left">
          <h3 className="text-4xl mb-2">Igor Silveira</h3>
          <ul>
            <li>Age: 24</li>
            <li>Location: Porto</li>
            <li>Occupation: Fullstack Developer</li>
          </ul>
        </div>
      </div>
      <div className="hidden md:block text-right">
        <p>About me:</p>
        <p>
          My Name is Igor Silveira and I am a Fullstack Developer
          with solid experience with NodeJS and Java for the backend
          and the React framework on the frontend (together with HTML5 and CSS3).
        </p>
      </div>
    </div>
  );
}
