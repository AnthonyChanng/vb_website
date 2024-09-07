import "./bottombar.scss";
export default function Bottombar() {
  return (
    <>
      <section className="section bottombar-section">
        <div className="container bottombar-container">
          <div className="flex bottombar-flex">
            <div className="top">
              {" "}
              <div className="left-bottom">
                <div className="location">
                  Bridgewater-Raritan High School <br></br>600 Garretson Rd,
                  Bridgewater, NJ 08807
                </div>
              </div>
              <div className="right-bottom">
                Images from
                <a
                  className="img-origin"
                  href="https://ktusim.smugmug.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ktusim
                </a>{" "}
                &{" "}
                <a
                  className="img-origin"
                  href="https://www.instagram.com/photographedbysamm/"
                  target="_blank"
                  rel="noreferrer"
                >
                  PhotographedBySam
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
