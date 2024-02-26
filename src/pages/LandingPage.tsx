import { FunctionComponent } from "react";
import "antd/dist/antd.min.css";
import { Dropdown, Menu } from "antd";
import { DownOutlined } from "@ant-design/icons";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <header className={styles.topHeader}>
        <header className={styles.topContainer}>
          <div className={styles.logo}>
            <img className={styles.houselineIcon} alt="" src="/houseline.svg" />
            <div className={styles.name}>
              <div className={styles.reis}>REIS</div>
              <div className={styles.realState}>Real State</div>
            </div>
          </div>
          <div className={styles.navigationRight}>
            <div className={styles.navigation}>
              <div className={styles.home}>HOME</div>
              <div className={styles.home}>ABOUT US</div>
              <div className={styles.home}>OUR AGENTS</div>
              <div className={styles.properties}>PROPERTIES</div>
              <div className={styles.home}>GALLERY</div>
              <div className={styles.home}>BLOG</div>
              <div className={styles.home}>CONTACT US</div>
              <div className={styles.home}>SEARCH</div>
            </div>
            <button className={styles.hamburger}>
              <img
                className={styles.hamburgerMenuIcon}
                alt=""
                src="/notification.svg"
              />
            </button>
          </div>
        </header>
      </header>
      <div className={styles.heroSection}>
        <div className={styles.heroSectionContents}>
          <div className={styles.text}>
            <div className={styles.findYourDream}>Find Your Dream Home</div>
            <div className={styles.vestibulumAnteIpsum}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.rentsale}>
            <div className={styles.tabs}>
              <button className={styles.rent}>
                <div className={styles.loadMoreListing}>Rent</div>
              </button>
              <button className={styles.sale}>
                <div className={styles.sale1}>Sale</div>
              </button>
            </div>
            <div className={styles.formwrapper}>
              <div className={styles.formcontainer}>
                <div className={styles.locations}>
                  <div className={styles.locations1}>Locations</div>
                  <Dropdown
                    overlay={
                      <Menu>
                        {([] as any).map((option: any, index: number) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select your city `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className={styles.propertyType}>
                  <div className={styles.propertyType1}>Property Type</div>
                  <Dropdown
                    className={styles.dropdownlink}
                    overlay={
                      <Menu>
                        {(
                          [
                            { value: "Studio apartments" },
                            { value: "One-bedroom apartments" },
                            { value: "Two-bedroom apartments" },
                            { value: "Three-bedroom apartments" },
                            { value: "Four or more bedroom apartments/houses" },
                          ] as any
                        ).map((option: any, index: number) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select property type `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <div className={styles.rentRange}>
                  <div className={styles.propertyType1}>Rent Range</div>
                  <Dropdown
                    className={styles.dropdownlink}
                    overlay={
                      <Menu>
                        {(
                          [
                            { value: "$500-$2000" },
                            { value: "$2500-$10000" },
                            { value: "$10000+" },
                          ] as any
                        ).map((option: any, index: number) => (
                          <Menu.Item key={index}>
                            <a onClick={(e) => e.preventDefault()}>
                              {option.value || ""}
                            </a>
                          </Menu.Item>
                        ))}
                      </Menu>
                    }
                    trigger={["hover"]}
                  >
                    <a onClick={(e) => e.preventDefault()}>
                      {`Select rent range `}
                      <DownOutlined />
                    </a>
                  </Dropdown>
                </div>
                <button className={styles.searchCta}>
                  <div className={styles.loadMoreListing}>Search</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.propertiesByAreaImagesSect}>
        <div className={styles.description}>
          <div className={styles.propertiesByArea}>Properties by Area</div>
          <div className={styles.areaSubtitle}>
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className={styles.cards}>
          <div className={styles.cardwrapper}>
            <div className={styles.row1}>
              <a className={styles.card1}>
                <div className={styles.text1}>
                  <div className={styles.centerville}>Centerville</div>
                  <div className={styles.listings}>25 listings</div>
                </div>
              </a>
              <a className={styles.card2}>
                <div className={styles.text1}>
                  <div className={styles.centerville}>Centerville</div>
                  <div className={styles.listings}>25 listings</div>
                </div>
              </a>
              <a className={styles.card3}>
                <div className={styles.text1}>
                  <div className={styles.centerville}>Centerville</div>
                  <div className={styles.listings}>25 listings</div>
                </div>
              </a>
            </div>
            <div className={styles.row2}>
              <a className={styles.card4}>
                <div className={styles.text1}>
                  <div className={styles.centerville}>Arlington</div>
                  <div className={styles.listings}>25 listings</div>
                </div>
              </a>
              <a className={styles.card5}>
                <div className={styles.text1}>
                  <div className={styles.centerville}>Centerville</div>
                  <div className={styles.listings}>25 listings</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.propertiesByAreaFeatureCar}>
        <div className={styles.areaContent}>
          <div className={styles.areaLabels}>
            <div className={styles.propertiesByArea}>Properties by Area</div>
            <div className={styles.areaSubtitle}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.propertiesRow}>
            <div className={styles.sellYourHome}>
              <div className={styles.contents}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.contents}>
                  <div className={styles.centerville}>Sell your home</div>
                  <div className={styles.weDoA}>
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <button className={styles.readMore}>Read more</button>
                </div>
              </div>
            </div>
            <div className={styles.rentYourHome}>
              <div className={styles.contents}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.contents}>
                  <div className={styles.centerville}>Rent your home</div>
                  <div className={styles.weDoA}>
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <button className={styles.readMore}>Read more</button>
                </div>
              </div>
            </div>
            <div className={styles.sellYourHome}>
              <div className={styles.contents}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.contents}>
                  <div className={styles.centerville}>Buy a home</div>
                  <div className={styles.weDoA}>
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <button className={styles.readMore}>Read more</button>
                </div>
              </div>
            </div>
            <div className={styles.freeMarketing}>
              <div className={styles.contents}>
                <img className={styles.icon} alt="" src="/icon.svg" />
                <div className={styles.contents}>
                  <div className={styles.centerville}>Free marketing</div>
                  <div className={styles.weDoA}>
                    We do a free evaluation to be sure you want to start
                    selling.
                  </div>
                  <button className={styles.readMore}>Read more</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.latestPropertiesOfRentCard}>
        <div className={styles.contents5}>
          <div className={styles.text6}>
            <div className={styles.propertiesByArea}>
              Latest Properties of Rent
            </div>
            <div className={styles.areaSubtitle}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.cardsRow}>
            <div className={styles.card11}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/property-image@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/arrowsout.svg" />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card11}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/property-image@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/arrowsout.svg" />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card11}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/property-image@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/arrowsout.svg" />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.card11}>
              <img
                className={styles.propertyImageIcon}
                alt=""
                src="/property-image@2x.png"
              />
              <div className={styles.propertyName}>
                <div className={styles.alliumPlaceOrlando}>
                  92 ALLIUM PLACE, ORLANDO FL 32827
                </div>
              </div>
              <div className={styles.price}>
                <div className={styles.div}>$ 590,693</div>
              </div>
              <div className={styles.moreDetails}>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/car.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/bathtub.svg" />
                  <div className={styles.ft}>4</div>
                </div>
                <div className={styles.parking}>
                  <img className={styles.carIcon} alt="" src="/arrowsout.svg" />
                  <div className={styles.ft}>2,096.00 ft</div>
                </div>
              </div>
              <div className={styles.container}>
                <div className={styles.user}>
                  <img
                    className={styles.userChild}
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className={styles.jennyWilson}>Jenny Wilson</div>
                </div>
                <div className={styles.ctas}>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/sharenetwork.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/heart.svg"
                    />
                  </div>
                  <div className={styles.share}>
                    <img
                      className={styles.sharenetworkIcon}
                      alt=""
                      src="/plus.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.cta}>
          <div className={styles.loadMoreListing}>Load more listing</div>
        </button>
      </div>
      <div className={styles.latestPropertiesOfRentCard}>
        <div className={styles.contents6}>
          <div className={styles.text6}>
            <div className={styles.propertiesByArea}>
              Latest Properties of Rent
            </div>
            <div className={styles.areaSubtitle}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.cardRow}>
            <div className={styles.card12}>
              <div className={styles.details}>
                <div className={styles.location}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.washington}>Washington</div>
                </div>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/arrowsout.svg"
                  />
                  <div className={styles.washington}>12000</div>
                </div>
              </div>
            </div>
            <div className={styles.card22}>
              <div className={styles.details}>
                <div className={styles.location}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.washington}>Washington</div>
                </div>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/arrowsout.svg"
                  />
                  <div className={styles.washington}>12000</div>
                </div>
              </div>
            </div>
            <div className={styles.card32}>
              <div className={styles.details}>
                <div className={styles.location}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.washington}>Washington</div>
                </div>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/arrowsout.svg"
                  />
                  <div className={styles.washington}>12000</div>
                </div>
              </div>
            </div>
            <div className={styles.card42}>
              <div className={styles.details}>
                <div className={styles.location}>
                  <img className={styles.mappinIcon} alt="" src="/mappin.svg" />
                  <div className={styles.washington}>Washington</div>
                </div>
                <div className={styles.location}>
                  <img
                    className={styles.mappinIcon}
                    alt=""
                    src="/arrowsout.svg"
                  />
                  <div className={styles.washington}>12000</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button className={styles.cta}>
          <div className={styles.loadMoreListing}>Load more listing</div>
        </button>
      </div>
      <div className={styles.latestPropertiesOfRentCard2}>
        <div className={styles.contents7}>
          <div className={styles.text6}>
            <div className={styles.propertiesByArea}>Contact us</div>
            <div className={styles.areaSubtitle}>
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Proin sodales ultrices nulla blandit
              volutpat.
            </div>
          </div>
          <div className={styles.form}>
            <div className={styles.formText}>
              <b className={styles.enquiryForm}>Enquiry Form</b>
              <div className={styles.areYouLooking}>
                Are you looking for details about a certain property? Ask us a
                question using the form below.
              </div>
            </div>
            <div className={styles.formFields}>
              <div className={styles.inputRow}>
                <input
                  className={styles.input}
                  placeholder="First name"
                  type="text"
                />
                <input
                  className={styles.input1}
                  placeholder="Last name"
                  type="text"
                />
              </div>
              <input
                className={styles.destinationNameInput}
                placeholder="Email id"
                type="text"
              />
              <textarea
                className={styles.input2}
                placeholder="Comments or questions"
                rows={10}
                maxLength={100}
                required={true}
                cols={10}
              />
              <button className={styles.formSubmitButton}>
                <div className={styles.submit}>Submit</div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerSection}>
        <footer className={styles.footer}>
          <div className={styles.contactUs2}>
            <div className={styles.logo}>
              <img
                className={styles.houselineIcon}
                alt=""
                src="/houseline.svg"
              />
              <div className={styles.name}>
                <div className={styles.reis}>REIS</div>
                <div className={styles.realState}>Real State</div>
              </div>
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.contactUs3}>Contact Us</div>
              <div className={styles.becomeAHost}>Call : +123 400 123</div>
              <div className={styles.praesentNullaMassa}>
                Praesent nulla massa, hendrerit vestibulum gravida in, feugiat
                auctor felis.
              </div>
              <div className={styles.emailExamplemailcom}>
                Email: example@mail.com
              </div>
            </div>
            <div className={styles.socialMedia}>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo}
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
              <div className={styles.socialMediaCard}>
                <img
                  className={styles.socialMediaLogo1}
                  alt=""
                  src="/social-media-logo.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.centerville}>Features</div>
            <div className={styles.featuresSubCategories}>
              <div className={styles.becomeAHost}>Home</div>
              <div className={styles.becomeAHost}>Become a Host</div>
              <div className={styles.becomeAHost}>Pricing</div>
              <div className={styles.becomeAHost}>Blog</div>
              <div className={styles.becomeAHost}>Contact</div>
            </div>
          </div>
          <div className={styles.features}>
            <div className={styles.centerville}>Company</div>
            <div className={styles.featuresSubCategories}>
              <div className={styles.becomeAHost}>About Us</div>
              <div className={styles.becomeAHost}>Press</div>
              <div className={styles.becomeAHost}>Contact</div>
              <div className={styles.becomeAHost}>Careers</div>
              <div className={styles.becomeAHost}>Blog</div>
            </div>
          </div>
          <div className={styles.termsAndPolicies}>
            <div className={styles.centerville}>Team and policies</div>
            <div className={styles.termsAndPoliciesSubcategori}>
              <div className={styles.becomeAHost}>Terms of servies</div>
              <div className={styles.becomeAHost}>Privacy Policy</div>
              <div className={styles.becomeAHost}>Security</div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
