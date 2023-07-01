import React, { useState } from 'react';
import './InstanceProgress.css';






const ProgressBar = ({ activeStep }) => {
  const steps = [1, 2, 3, 4, 5, 6];

  return (
    <React.Fragment>
      <div className="progress-bar1">
        {steps.map((step) => (
          <div
            key={step}
            className={`circle1 ${step <= activeStep ? 'active' : ''}`}
          ></div>
        ))}
        <div className="line1"></div>
      </div>
    </React.Fragment>
  );
};

const InstanceProgress = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);

  const toggleImageSize = () => {
    setIsEnlarged(!isEnlarged);
  };
  return (
    <React.Fragment>
      <div className="image-viewer">
        <img
          className={isEnlarged ? 'enlarged' : ''}
          src="assets/linux terminal.jpg" // Remplacez par le chemin réel vers votre image
          alt=""
        />
        <div className="button-container">
          <button onClick={toggleImageSize}>
            {isEnlarged ? 'Minimize' : 'Enlarge'}
          </button>
        </div>
      </div>

      <div className="video-container1">
        <iframe
          
          
          src="https://www.youtube.com/embed/BNL3qBN9pP0"
          title="YouTube Video"
          width="420px"
          height="220px"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>

      <ProgressBar activeStep={3} />

      <title>InstanceProgress</title>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <script src="https://cdn.tailwindcss.com"></script>
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        rel="stylesheet"
      />

      <div className="bg-gray-100">
        <div className="search-icon">
          <div className="absolute">
            <input
              type="text"
              placeholder="Search"
              className="absolute top-5 left-10 w-45 pl-10 ml-20 pr-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-gray-800 focus:border-gray-800 fi1"
            />
            <div className="absolute top-5 left-10 mt-2 ml-3 text-gray-800 search-icon">
              <i className="fas fa-search ml-20"></i>
            </div>
          </div>
        </div>

        <div className="flex">
          <div className="bg-white w-16 h-screen flex flex-col items-center justify-between">
            {/* Logo */}
            <div className="my-4">
              <img
                src="assets/icon.png"
                alt="CRMEFCLOUD"
                className="w-53 h-38"
              />
            </div>
            {/* Ligne de séparation */}
            <div className="border border-gray-300 w-16 absolute top-40"></div>

            {/* Icônes du menu */}
            <i className="far fa-calendar-alt absolute top-48"></i>
            <i className="fas fa-signature absolute top-72"></i>
            <i className="fas fa-cog text-gray-800 absolute top-80"></i>
            <i className="fas fa-chart-pie text-gray-800 absolute top-t"></i>
          </div>

          <div>
            <i className="fas fa-bell ic2"></i>
          </div>

          <div className="person">
            <img src="assets/pr.jpg" alt="CRMEFCLOUD" className="E11" />
          </div>
        </div>

        <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@2.7.3/dist/alpine.min.js" defer></script>

      </div>

      <button
        className="go-next-button"
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          padding: '8px 22px',
          gap: '10px',
          position: 'absolute',
          left: '79.51%',
          right: '8.17%',
          top: '900px',
          bottom: '11.72%',
          background: '#1700CF',
          borderRadius: '5px',
          width: '193px',
          height: '29px',
          fontFamily: 'Inter',
          fontStyle: 'normal',
          fontWeight: 500,
          fontSize: '24px',
          lineHeight: '29px',
          textAlign: 'center',
          letterSpacing: '0.46px',
          color: '#FFFFFF',
        }}
      >
        Go next
      </button>




      <p style={{
      position: 'absolute',
      width: '744px',
      height: '47px',
      left: '233px',
      top: '520px',
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: 700,
      fontSize: '26px',
      lineHeight: '20px',
      color: '#000000',
    }}>
      Practice in the linux instance
    </p>

      <div className="container">
     
      <p className="video-title">Video : Navigating the file system</p>
      </div>

      <div className="faq-container1">
        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-arrow">▼</span> Welcome to the course
          </div>
          <div className="faq-answer">
            <p>
              <b>II</b> Sous-réponse 2.1
            </p>
            <p>
              <b>II</b> Sous-réponse 2.2
            </p>
            <p>
              <b>II</b> Sous-réponse 2.3
            </p>
            <p>
              <b>II</b> Sous-réponse 2.4
            </p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-arrow">▼</span> Setting Up Linux
          </div>
          <div className="faq-answer">
            <p>
              <b>II</b> Sous-réponse 2.1
            </p>
            <p>
              <b>II</b> Sous-réponse 2.2
            </p>
            <p>
              <b>II</b> Sous-réponse 2.3
            </p>
            <p>
              <b>II</b> Sous-réponse 2.4
            </p>
          </div>
        </div>

        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-arrow">▼</span> Basic Linux commands
          </div>
          <div className="faq-answer">
            <p>
              <b>II</b> navigation the file system
            </p>
            <p>
              <b>II</b> navigation the file system
            </p>
            <p>
              <b>II</b> navigation the file system
            </p>
            <p>
              <b>II</b> navigation the file system
            </p>
          </div>
        </div>


        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-arrow">▼</span> Mastering open source software
          </div>
          <div className="faq-answer">
            <p>
              <b>II</b> Sous-réponse 2.1
            </p>
            <p>
              <b>II</b> Sous-réponse 2.2
            </p>
            <p>
              <b>II</b> Sous-réponse 2.3
            </p>
            <p>
              <b>II</b> Sous-réponse 2.4
            </p>
          </div>
        </div>


        <div className="faq-item">
          <div className="faq-question">
            <span className="faq-arrow">▼</span> Course conclusion
          </div>
          <div className="faq-answer">
            <p>
              <b>II</b> Sous-réponse 2.1
            </p>
            <p>
              <b>II</b> Sous-réponse 2.2
            </p>
            <p>
              <b>II</b> Sous-réponse 2.3
            </p>
            <p>
              <b>II</b> Sous-réponse 2.4
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default InstanceProgress;
