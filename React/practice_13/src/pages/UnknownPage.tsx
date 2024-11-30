import { Link } from "react-router-dom";
import "./page.css";

const Page = () => {
  return (
    <div className="main">
      <div className="card">
        <div className="header">
          <h1>Page Not Found</h1>
        </div>
        <div className="content">
          <p>
            Looks like you've followed a broken link or entered a URL that
            doesn't exist on this site.
          </p>
          <p>
            <Link id="back-link" to="/">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 16 16"
              >
                <path
                  fill="#007067"
                  d="M11.9998836,4.09370803 L8.55809517,7.43294953 C8.23531459,7.74611298 8.23531459,8.25388736 8.55809517,8.56693769 L12,11.9062921 L9.84187871,14 L4.24208544,8.56693751 C3.91930485,8.25388719 3.91930485,7.74611281 4.24208544,7.43294936 L9.84199531,2 L11.9998836,4.09370803 Z"
                ></path>
              </svg>
              Back to our site
            </Link>
          </p>
          <hr />
          <p>
            If this is your site, and you weren't expecting a 404 for this path,
            please visit Netlify's
            <a href="https://answers.netlify.com/t/support-guide-i-ve-deployed-my-site-but-i-still-see-page-not-found/125?utm_source=404page&amp;utm_campaign=community_tracking">
              "page not found" support guide
            </a>
            for troubleshooting tips.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page;
