import React, { useState } from "react";
import { Link } from "react-router-dom";
import projectData from "../components/projectData";
import "./../styles/portfolioPage.css";
import { motion as m } from "framer-motion";

const ProjectListingsPage = () => {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);

  const handleNextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projectData.length);
  };

  const handlePreviousProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projectData.length) % projectData.length
    );
  };

  const currentProject = projectData[currentProjectIndex];

  const slideInTransition = {
    initial: {
      x: "-100%",
      transition: { duration: 0.5, ease: "easeInOut" },
    },
    animate: {
      x: "0%",
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 160,
        damping: 20,
        bounce: 0.3,
        duration: 2,
        ease: "easeOut",
      },
    },

    exit: {
      x: "-150%",
      transition: { duration: 0.7, ease: "easeInOut" },
    },
  };

  return (
    <>
      <m.div
        initial="initial"
        animate="animate"
        exit="exit"
        variants={slideInTransition}
        className="folderBackgroundDiv "
      >
        <br />
        <div className="justMeFont folderPageTitle">Portfolio</div>
        <div className="menuAndBackButton">
          <div className="justMeFont" id="folderMenu">
            Home &gt; Work &gt; Portfolio
          </div>
        </div>
        <div className="portfolioContentPreview">
          <img
            className="arrow"
            onClick={handlePreviousProject}
            src={"./assets/leftChevron.svg"}
            alt="left Arrow"
          />

          <img
            src={currentProject.projectImage}
            id="windyScenePreviewImg"
            alt=" Current Project Image"
          />

          <div class="portfolioPreviewText jost">
            <h2 class="portfolioProjectTitle"> {currentProject.title}</h2>
            <p className="contentDescriptionText">
              {" "}
              {currentProject.projectDescription}
            </p>

            <Link to={`/project/${currentProject.id}`}>
              <img
                id="viewProjectButton"
                src={"./assets/viewProjectButton.svg"}
                alt="button to view the current Project"
              />
            </Link>
            <div className="PreviewContactIcons">
              <svg
                width="197"
                height="72"
                viewBox="0 0 197 72"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="contact icons">
                  <g id="avatar" filter="url(#filter0_d_466_1934)">
                    <path
                      id="Vector 26"
                      d="M168.548 32.6702C167.309 32.1693 166.816 30.9469 169.347 31.1706C171.733 31.3621 170.959 31.1639 173.555 31.5041C176.151 31.8443 175.282 33.3513 174.151 33.3393C172.8 33.325 169.788 33.171 168.548 32.6702Z"
                      fill="#9CAFFE"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <path
                      id="Vector 27"
                      d="M140.544 30.3574C139.384 29.6651 140.01 28.611 140.746 28.7747C141.326 28.8681 143.115 29.2415 145.635 29.9877C148.155 30.7339 147.23 31.9622 146.204 31.7874C144.873 31.5606 141.705 31.0497 140.544 30.3574Z"
                      fill="#9CAFFE"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <path
                      id="Vector 28"
                      d="M173.488 41.5668L174.042 42.7003M174.381 41.0742L174.85 41.8509"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <path
                      id="Vector 29"
                      d="M172.486 38.8011C171.22 40.5646 170.307 39.379 170.008 38.5658L171.028 39.0602L171.141 38.5204C171.126 38.1419 171.375 37.668 172.486 38.8011Z"
                      fill="#9CAFFE"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <path
                      id="Vector 30"
                      d="M140.768 35.7617C141.224 37.8844 142.535 37.1628 143.133 36.5367L142.001 36.582L142.113 36.0423C142.278 35.7012 142.24 35.1675 140.768 35.7617Z"
                      fill="#9CAFFE"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <g id="Vector 31">
                      <path
                        d="M165.202 7.77618C148.704 2.392 136.103 14.1931 132.561 20.4733C133.883 21.2695 134.405 21.2872 135.28 22.3523C137.761 17.0293 146.609 7.15923 162.153 10.2629C177.697 13.3665 182.649 24.8876 182.323 30.2552C182.417 29.4934 184.889 30.9543 185.178 31.7085C185.508 24.896 180.943 10.5047 165.202 7.77618Z"
                        fill="#F5F5F5"
                      />
                      <path
                        d="M131.41 24.4753C131.476 23.4481 132.287 20.5262 132.561 20.4733M132.561 20.4733C136.103 14.1931 148.704 2.392 165.202 7.77618C180.943 10.5047 185.508 24.896 185.178 31.7085M132.561 20.4733C133.883 21.2695 134.405 21.2872 135.28 22.3523M185.178 31.7085C184.889 30.9543 182.417 29.4934 182.323 30.2552M185.178 31.7085L184.586 34.5493M182.323 30.2552C182.033 32.6084 182.008 32.7188 182.082 33.3127L182.282 34.2383M182.323 30.2552C182.649 24.8876 177.697 13.3665 162.153 10.2629C146.609 7.15923 137.761 17.0293 135.28 22.3523M135.28 22.3523L134.539 24.6189"
                        stroke="#9CAFFE"
                        stroke-width="3"
                      />
                    </g>
                    <path
                      id="Vector 32"
                      d="M129.628 41.0835C129.874 41.9265 130.714 43.448 132.115 42.79C132.139 38.8922 130.998 36.7878 135.711 25.5537"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <path
                      id="Vector 33"
                      d="M179.016 49.2691C178.389 49.8943 176.884 50.8285 175.868 49.5636C177.669 46.1081 179.492 45.7726 180.295 33.5469"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <path
                      id="Vector 34"
                      d="M189.498 45.0759C191.711 35.9802 184.704 34.5569 182.147 33.9851C183.25 40.4023 180.445 47.6895 178.904 50.531C180.165 51.4755 187.691 52.5032 189.498 45.0759Z"
                      fill="#F5F5F5"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <path
                      id="Vector 35"
                      d="M122.638 32.1055C124.245 22.8834 131.237 24.3803 133.81 24.8785C130.233 30.3194 129.891 38.1205 130.167 41.3409C128.634 41.7027 121.325 39.6359 122.638 32.1055Z"
                      fill="#F5F5F5"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <path
                      id="Vector 36"
                      d="M133.376 37.7689C129.304 26.8113 148.024 20.0674 158.248 18.3654C167.2 20.6083 184.945 30.5045 178.404 42.844C173.387 52.3098 138.466 51.4659 133.376 37.7689Z"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <path
                      id="Vector 37"
                      d="M154.855 38.5283L157.258 39.878L159.682 38.8565"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <path
                      id="Vector 38"
                      d="M154.728 37.3141C154.962 37.8021 155.16 38.8655 154.079 39.215"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <g id="Vector 41">
                      <path
                        d="M138.59 20.2059C136.91 20.688 135.863 25.6275 135.543 27.3737L137.068 26.2172L138.728 25.3987L141.935 23.4153L143.374 22.3896L142.048 20.4162C141.548 19.5688 140.271 19.7238 138.59 20.2059Z"
                        fill="#9CAFFE"
                      />
                      <path
                        d="M144.198 22.2222L141.753 18.501C141.288 16.4901 144.648 17.4245 145.568 17.9718C145.455 17.6253 145.703 16.8844 147.597 16.6931C149.491 16.5019 150.6 17.1925 150.918 17.5618L149.844 19.9482L146.278 21.0567L144.198 22.2222Z"
                        fill="#9CAFFE"
                      />
                      <path
                        d="M152.18 18.7035C152.573 17.5444 151.598 16.6905 151.061 16.4084C151.79 15.5538 153.278 15.7073 153.93 15.8909L157.223 18.2594L152.499 19.9079C152.229 19.9894 151.788 19.8626 152.18 18.7035Z"
                        fill="#9CAFFE"
                      />
                      <path
                        d="M158.606 18.853L157.882 17.95C157.446 17.0107 159.096 16.5062 160.644 15.7987C162.194 15.0904 164.18 16.1901 165.155 17.133L162.636 19.3886L158.606 18.853Z"
                        fill="#9CAFFE"
                      />
                      <path
                        d="M163.269 20.1381L167.308 17.3713C170.137 17.6844 170.19 19.6945 169.863 20.6604L167.988 21.9561L167.514 22.5043C166.978 23.2586 164.857 21.6108 164.437 21.3535C164.118 21.1582 163.284 20.8634 163.269 20.1381Z"
                        fill="#9CAFFE"
                      />
                      <path
                        d="M176.493 24.8863C174.147 27.315 169.22 25.867 169.496 23.6262C169.708 21.9139 170.524 21.1983 171.175 20.9618C174.444 19.3084 174.014 21.1198 175.758 22.1479C177.48 22.3384 176.827 23.8655 176.493 24.8863C179.132 23.7086 180.043 27.2263 179.969 28.6656L179.356 33.8735L176.4 29.5677L174.532 27.0228L176.493 24.8863Z"
                        fill="#9CAFFE"
                      />
                      <path
                        d="M130.223 39.9903L132.629 36.9162C137.034 45.4206 141.678 48.0293 155.916 49.2703C169.889 50.4882 176.898 44.1448 178.537 43.1293C179.061 44.1435 179.888 46.4654 179.012 47.64C180.685 48.6678 180.064 50.4047 179.544 51.1447C180.17 52.3831 180.467 50.8952 181.218 53.6506C181.818 55.8549 180.479 56.6865 179.734 56.8268C180.148 57.2623 180.89 58.3242 180.546 59.0879C180.116 60.0425 180.998 60.4741 178.61 60.8779C178.334 63.1187 176.035 61.5393 174.92 60.4695C174.48 61.0889 173.265 61.7561 171.926 59.4701C170.995 60.7032 170.319 61.1294 168.462 59.7548C167.386 59.6357 167.551 60.8231 165.541 59.4315C163.746 60.8363 162.592 59.3279 162.239 58.3981C162.192 58.7826 161.695 59.2732 160.087 58.1599C158.104 60.0783 156.294 57.7401 155.637 56.3313C155.555 56.9903 152.105 57.9328 150.987 57.0655C148.967 55.4989 147.831 58.5628 146.79 57.4972C146.351 57.8291 145.447 58.1826 144.414 57.5946C143.07 58.3812 142.112 57.7295 141.8 57.3053C141.381 57.7599 140.346 58.4805 139.566 57.7262C139.1 58.4762 138.142 57.9025 137.721 57.522L135.693 58.8007C135.28 59.2003 134.179 59.702 133.079 58.5114C132.088 59.4706 131.442 57.8848 131.243 56.972C131.121 57.9606 126.604 58.3081 126.88 56.0673C125.379 55.0994 126.541 53.7611 128.164 53.6623C127.726 53.0014 127.631 52.3968 129.762 51.2965C127.474 48.371 129.552 45.4276 130.617 44.3763C129.805 43.8856 130.016 41.2479 130.223 39.9903Z"
                        fill="#9CAFFE"
                      />
                      <path
                        d="M171.708 20.8646C171.561 20.8615 171.376 20.8888 171.175 20.9618M176.493 24.8863C174.147 27.315 169.22 25.867 169.496 23.6262C169.708 21.9139 170.524 21.1983 171.175 20.9618M176.493 24.8863C176.827 23.8655 177.48 22.3384 175.758 22.1479C174.014 21.1198 174.444 19.3084 171.175 20.9618M176.493 24.8863C179.132 23.7086 180.043 27.2263 179.969 28.6656L179.356 33.8735L176.4 29.5677L174.532 27.0228L176.493 24.8863ZM146.936 57.3726C146.581 57.723 145.579 58.258 144.414 57.5946C143.07 58.3812 142.112 57.7295 141.8 57.3053C141.381 57.7599 140.346 58.4805 139.566 57.7262C139.1 58.4762 138.142 57.9025 137.721 57.522L135.693 58.8007C135.28 59.2003 134.179 59.702 133.079 58.5114C132.088 59.4706 131.442 57.8848 131.243 56.972C131.121 57.9606 126.604 58.3081 126.88 56.0673C125.379 55.0994 126.541 53.7611 128.164 53.6623C127.726 53.0014 127.631 52.3968 129.762 51.2965C127.474 48.371 129.552 45.4276 130.617 44.3763C129.805 43.8856 130.016 41.2479 130.223 39.9903L132.629 36.9162C137.034 45.4206 141.678 48.0293 155.916 49.2703C169.889 50.4882 176.898 44.1448 178.537 43.1293C179.061 44.1435 179.888 46.4654 179.012 47.64C180.685 48.6678 180.064 50.4047 179.544 51.1447C180.17 52.3831 180.467 50.8952 181.218 53.6506C181.818 55.8549 180.479 56.6865 179.734 56.8268C180.148 57.2623 180.89 58.3242 180.546 59.0879C180.116 60.0425 180.998 60.4741 178.61 60.8779C178.334 63.1187 176.035 61.5393 174.92 60.4695C174.48 61.0889 173.265 61.7561 171.926 59.4701C170.995 60.7032 170.319 61.1294 168.462 59.7548C167.386 59.6357 167.551 60.8231 165.541 59.4315C163.746 60.8363 162.592 59.3279 162.239 58.3981C162.192 58.7826 161.695 59.2732 160.087 58.1599C158.104 60.0783 156.294 57.7401 155.637 56.3313C155.555 56.9903 152.105 57.9328 150.987 57.0655C148.967 55.4989 147.831 58.5628 146.79 57.4972M135.543 27.3737C135.863 25.6275 136.91 20.688 138.59 20.2059C140.271 19.7238 141.548 19.5688 142.048 20.4162L143.374 22.3896L141.935 23.4153L138.728 25.3987L137.068 26.2172L135.543 27.3737ZM141.753 18.501L144.198 22.2222L146.278 21.0567L149.844 19.9482L150.918 17.5618C150.6 17.1925 149.491 16.5019 147.597 16.6931C145.703 16.8844 145.455 17.6253 145.568 17.9718C144.648 17.4245 141.288 16.4901 141.753 18.501ZM151.061 16.4084C151.598 16.6905 152.573 17.5444 152.18 18.7035C151.788 19.8626 152.229 19.9894 152.499 19.9079L157.223 18.2594L153.93 15.8909C153.278 15.7073 151.79 15.5538 151.061 16.4084ZM157.882 17.95L158.606 18.853L162.636 19.3886L165.155 17.133C164.18 16.1901 162.194 15.0904 160.644 15.7987C159.096 16.5062 157.446 17.0107 157.882 17.95ZM167.308 17.3713L163.269 20.1381C163.284 20.8634 164.118 21.1582 164.437 21.3535C164.857 21.6108 166.978 23.2586 167.514 22.5043L167.988 21.9561L169.863 20.6604C170.19 19.6945 170.137 17.6844 167.308 17.3713Z"
                        stroke="#9CAFFE"
                        stroke-width="3"
                      />
                    </g>
                    <path
                      id="Vector 42"
                      d="M134.718 24.5194L135.395 25.8155"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                    <path
                      id="Vector 43"
                      d="M181.791 33.4572L180.178 34.07"
                      stroke="#9CAFFE"
                      stroke-width="3"
                    />
                  </g>
                  <a
                    href="https://www.linkedin.com/in/temi-ijisesan-692829257/"
                    className="link-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <g id="linkedin" clip-path="url(#clip0_466_1934)">
                      <path
                        id="Vector"
                        d="M94.2611 17H62.7316C61.2213 17 60 18.1924 60 19.6666V51.3262C60 52.8004 61.2213 54 62.7316 54H94.2611C95.7715 54 97 52.8004 97 51.3334V19.6666C97 18.1924 95.7715 17 94.2611 17ZM70.9771 48.5295H65.485V30.8678H70.9771V48.5295ZM68.2311 28.4613C66.4678 28.4613 65.0441 27.0377 65.0441 25.2816C65.0441 23.5256 66.4678 22.102 68.2311 22.102C69.9871 22.102 71.4107 23.5256 71.4107 25.2816C71.4107 27.0305 69.9871 28.4613 68.2311 28.4613ZM91.5295 48.5295H86.0445V39.9443C86.0445 37.8992 86.0084 35.2615 83.19 35.2615C80.3355 35.2615 79.902 37.4945 79.902 39.7998V48.5295H74.4242V30.8678H79.6852V33.2814H79.7574C80.4873 31.8939 82.2795 30.427 84.9461 30.427C90.5033 30.427 91.5295 34.0836 91.5295 38.8387V48.5295V48.5295Z"
                        fill="#020001"
                      />
                    </g>
                  </a>
                  <a
                    href="mailto:your-temilolu360@gmail.com"
                    className="link-button"
                  >
                    <g id="mail">
                      <g id="mail_2">
                        <path
                          id="Vector_2"
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M40.8379 19.7365C41.2309 20.1289 41.4517 20.6615 41.4517 21.2168L41.4517 32.3982C41.4697 36.5913 41.5054 41.9421 41.5644 49.2518C41.5689 49.8106 41.3496 50.348 40.9554 50.7442C40.5611 51.1403 40.0248 51.3623 39.4659 51.3605L38.8347 51.3584C38.7294 51.3605 38.6323 51.3605 38.567 51.3605H38.5634L38.5215 51.3601L38.3477 51.3566C31.5736 51.2221 29.0673 51.2423 23.8208 51.2845C23.1036 51.2903 22.3352 51.2965 21.4977 51.3028C17.7275 51.3309 11.9108 51.3605 3.7391 51.3605C3.49971 51.3605 2.98441 51.3429 2.45757 51.0842C2.1639 50.94 1.81106 50.6932 1.53626 50.2856C1.26007 49.8759 1.14542 49.426 1.13919 49.0108L1.03663 44.6159C1.00519 43.3903 0.968811 42.0036 0.930487 40.5426C0.762746 34.1478 0.557651 26.329 0.564626 24.3561C0.564808 24.3047 0.564876 24.2518 0.564946 24.1976C0.565815 23.5239 0.566943 22.6493 0.789643 21.8844C1.10383 20.8053 1.78794 20.0413 2.75733 19.5031C3.06431 19.3326 3.40925 19.2422 3.76036 19.2401L17.405 19.1591L17.4141 19.1591L39.3566 19.125C39.912 19.1241 40.4449 19.3441 40.8379 19.7365ZM21.4779 47.1191C22.3083 47.1129 23.0715 47.1068 23.7849 47.101C28.7623 47.0609 31.3153 47.0404 37.3639 47.1532C37.3149 40.9132 37.2843 36.1938 37.2681 32.4117C37.2519 28.6402 37.2499 25.7999 37.2583 23.3119L17.4298 23.3427L17.4206 23.3427L5.11247 23.4158L21.9168 33.7212C22.6091 33.1731 23.5651 32.4294 24.6544 31.6187C26.8449 29.9887 29.696 27.9959 32.0401 26.8239C33.0735 26.3072 34.33 26.726 34.8466 27.7594C35.3633 28.7927 34.9445 30.0492 33.9111 30.5659C31.924 31.5594 29.3269 33.3566 27.1521 34.9751C26.0817 35.7716 25.143 36.5026 24.4721 37.0343C24.137 37.2999 23.8694 37.5151 23.6866 37.6632C23.5953 37.7372 23.5251 37.7944 23.4783 37.8327L23.426 37.8756L23.4134 37.8859L23.4107 37.8882V37.8882C22.7216 38.4564 21.7472 38.5248 20.9858 38.0579L4.83733 28.1548L5.21382 44.289C5.24083 45.3391 5.26449 46.2819 5.28305 47.0665C5.30904 47.0657 5.33515 47.0653 5.36137 47.0653L21.4779 47.1191Z"
                          fill="#020001"
                        />
                      </g>
                    </g>
                  </a>
                </g>
                <defs>
                  <filter
                    id="filter0_d_466_1934"
                    x="116.978"
                    y="4.90613"
                    width="78.4404"
                    height="66.6073"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_466_1934"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_466_1934"
                      result="shape"
                    />
                  </filter>
                  <clipPath id="clip0_466_1934">
                    <rect
                      width="37"
                      height="37"
                      fill="white"
                      transform="translate(60 17)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <img
            onClick={handleNextProject}
            src={"./assets/rightChevron.svg"}
            alt="right Arrow"
            className="arrow"
          />
        </div>
        <svg
          viewBox="0 0 1133 550"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="folderBackground">
            <path
              id="Rectangle 17"
              d="M2.49996 63C2.49996 53.335 10.335 45.5 20 45.5H1113C1122.66 45.5 1130.5 53.335 1130.5 63V530C1130.5 539.665 1122.66 547.5 1113 547.5H20C10.335 547.5 2.5 539.665 2.5 530L2.49996 63Z"
              fill="var(--grey)"
              stroke="#9CAFFE"
              stroke-width="5"
            />
            <path
              id="Vector 270"
              d="M37.7732 1.54008L12.9844 46.0401C11.8705 48.0397 13.3162 50.5 15.6052 50.5H215.082C217.327 50.5 218.777 48.1236 217.749 46.127L194.843 1.627C194.329 0.627929 193.3 0 192.176 0H40.394C39.3058 0 38.3028 0.589357 37.7732 1.54008Z"
              fill="#9CAFFE"
            />
            <Link to="/work">
              <path
                id="exitButton"
                d="M175 15L191 31M191 15L175 31"
                stroke="#F5F5F5"
                stroke-width="3"
              />
            </Link>
            <path
              id="Vector 272"
              d="M1123 109H10.077C8.42018 109 7.07704 107.657 7.07703 106L7.07693 62.1157C6.33534 56.8743 11.1297 51.6619 13.9513 49.8659C14.3463 49.6145 14.7896 49.5121 15.2579 49.5114C377.314 49.007 1102.64 48 1113.02 48C1123 49.2099 1125.83 56.2342 1126 59.595V106C1126 107.657 1124.66 109 1123 109Z"
              fill="#9CAFFE"
              stroke="#F5F5F5"
              stroke-width="3"
            />
            <Link to="/work">
              <g id="backButton">
                <path
                  id="backArrow"
                  d="M27.2929 78.2929C26.9024 78.6834 26.9024 79.3166 27.2929 79.7071L33.6569 86.0711C34.0474 86.4616 34.6805 86.4616 35.0711 86.0711C35.4616 85.6805 35.4616 85.0474 35.0711 84.6569L29.4142 79L35.0711 73.3431C35.4616 72.9526 35.4616 72.3195 35.0711 71.9289C34.6805 71.5384 34.0474 71.5384 33.6569 71.9289L27.2929 78.2929ZM54 78H28V80H54V78Z"
                  fill="#F5F5F5"
                />
                <path
                  id="back"
                  d="M65.81 69.75C66.85 69.75 67.52 71.79 67.82 75.87L68 76.8C68.92 74.92 69.67 73.98 70.25 73.98C70.25 73.9 70.46 73.84 70.88 73.8H71C72.32 73.8 73.16 74.83 73.52 76.89V76.98C73.52 78.74 72.64 80.68 70.88 82.8C70.14 83.6 69.33 84 68.45 84C67.45 83.78 66.95 83.28 66.95 82.5L65.45 71.73L65 70.62C65 70.26 65.27 69.97 65.81 69.75ZM68.93 81.93H69.02C70.06 81.51 70.97 80.08 71.75 77.64V76.5C71.57 75.88 71.34 75.57 71.06 75.57H70.82C69.94 76.09 69.31 78.21 68.93 81.93ZM80.6429 72.42C81.5229 72.42 81.9629 72.77 81.9629 73.47L81.6929 74.04L81.5129 79.53C81.5129 82.01 82.0129 83.55 83.0129 84.15L83.0729 84.6C83.0129 85.18 82.7429 85.47 82.2629 85.47H82.0829C80.5829 84.45 79.8329 82.89 79.8329 80.79H79.6229C78.8229 83.03 77.8529 84.15 76.7129 84.15C75.6529 83.85 75.1229 83.06 75.1229 81.78C75.1229 78.96 76.2529 76.15 78.5129 73.35C79.2729 72.73 79.9829 72.42 80.6429 72.42ZM77.0129 80.58L76.8929 81.42V81.99H77.1929C78.6929 78.25 79.4429 75.97 79.4429 75.15H79.3229C78.1629 76.45 77.3929 78.26 77.0129 80.58ZM86.8527 73.83L88.0827 73.65C88.5827 73.65 88.8627 73.96 88.9227 74.58C88.9227 75.12 88.2727 75.47 86.9727 75.63C86.1527 76.27 85.7427 77.09 85.7427 78.09V79.08C86.1427 81.28 86.8227 82.38 87.7827 82.38H88.0827C88.6427 82.38 89.4827 81.85 90.6027 80.79H90.7827C91.1827 80.79 91.5027 81.07 91.7427 81.63C91.4627 82.49 90.5627 83.27 89.0427 83.97C88.7627 84.09 88.4127 84.15 87.9927 84.15C85.9327 84.15 84.5927 82.53 83.9727 79.29V78.63C83.9727 76.29 84.9327 74.69 86.8527 73.83ZM94.7855 68.13H94.9655C95.2255 68.13 95.4755 68.35 95.7155 68.79L95.5955 70.83V71.97L95.7155 77.22L95.8055 77.52H95.8955C96.7555 76.72 97.5055 75.31 98.1455 73.29L98.8055 73.08C99.3655 73.16 99.6455 73.41 99.6455 73.83C99.6455 75.13 98.7155 76.88 96.8555 79.08V79.29C99.3155 82.15 100.936 83.58 101.716 83.58H101.896L102.646 83.13H102.916C103.336 83.13 103.646 83.41 103.846 83.97C103.846 84.61 103.136 85.05 101.716 85.29C100.296 85.29 98.4455 83.85 96.1655 80.97H95.8955L95.9855 82.59V84.15C95.8655 84.77 95.5555 85.08 95.0555 85.08C94.4955 84.96 94.2155 84.65 94.2155 84.15V83.97L94.0955 80.52C93.8755 80.52 93.7255 80.21 93.6455 79.59L94.0355 78.84L93.8555 72.09V70.77C93.8555 69.01 94.1655 68.13 94.7855 68.13Z"
                  fill="#F5F5F5"
                />
              </g>
            </Link>
          </g>
        </svg>
      </m.div>
    </>
  );
};

export default ProjectListingsPage;
