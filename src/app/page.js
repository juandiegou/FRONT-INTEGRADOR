import Link from "next/link"
import FeatureCard from './components/feature-card'
import GalleryCard3 from './components/gallery-card3'
import './home.css'

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-container01">
        <div className="home-header">
          <header data-thq="thq-navbar" className="home-navbar-interactive">
            <span className="home-logo">SIGAP</span>
            <div data-thq="thq-navbar-nav" className="home-desktop-menu">
              <nav className="home-links">
                <Link href="/home" className="home-nav1">
                  <span>Dashboard</span>
                </Link>
                <Link href={"/student-management"} className="home-nav2">
                  Student Management
                </Link>
                <Link href={"/course-management"}  className="home-nav3">
                 Course Management
                </Link>
                <Link href={"/financial-module"} className="home-nav4">
                 Financial Module
                </Link>
                <Link href={"/communication-hub"} className="home-nav5">
                  Communication Hub
                </Link>
              </nav>
              <div className="home-buttons">
                <button className="home-login button">Login</button>
                <button className="home-register button">Register</button>
              </div>
            </div>
            <div data-thq="thq-burger-menu" className="home-burger-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon">
                <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
            <div data-thq="thq-mobile-menu" className="home-mobile-menu">
              <div className="home-nav">
                <div className="home-top">
                  <span className="home-logo1">SIGAP</span>
                  <div data-thq="thq-close-menu" className="home-close-menu">
                    <svg viewBox="0 0 1024 1024" className="home-icon02">
                      <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="home-buttons1">
                  <button className="home-login1 button">Login</button>
                  <button className="home-register1 button">Register</button>
                </div>
              </div>
              <div>
                <svg
                  viewBox="0 0 950.8571428571428 1024"
                  className="home-icon04"
                >
                  <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                </svg>
                <svg
                  viewBox="0 0 877.7142857142857 1024"
                  className="home-icon06"
                >
                  <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                </svg>
                <svg
                  viewBox="0 0 602.2582857142856 1024"
                  className="home-icon08"
                >
                  <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
                </svg>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="home-hero">
        <div className="home-container02">
          <div className="home-hero1">
            <div className="home-container03">
              <h1 className="home-hero-heading heading1">
                Enhance Efficiency and Transparency
              </h1>
              <span className="home-hero-sub-heading">
                Designing a User-Friendly Academic Management System
              </span>
              <div className="home-btn-group">
                <button className="home-hero-button1 button">
                  Get Started
                </button>
                <button className="home-hero-button2 button">
                  Learn More →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-details">
        <div className="home-details1">
          <div className="home-container04">
            <span className="home-text sectionTitle">
              <span>Details</span>
              <br></br>
            </span>
            <h2 className="home-details-heading heading2">
              Efficiently Manage Postgraduate Programs
            </h2>
            <span className="home-details-sub-heading">
              Create a user-friendly interface for administrators, faculty, and
              students to enhance efficiency and transparency in program
              administration. SIGAP aims to provide key metrics for program
              overview, student management, course management, financial module,
              communication hub, and reports.
            </span>
          </div>
          <img
            alt="image"
            src="https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwfHxkYXNoYm9hcmR8ZW58MHx8fHwxNzAwNDA4NzcxfDA&amp;ixlib=rb-4.0.3&amp;w=400"
            loading="lazy"
            className="home-details-image"
          />
        </div>
      </div>
      <div className="home-features">
        <div className="home-features-container">
          <div className="home-features1">
            <div className="home-container05">
              <span className="home-text3 sectionTitle">
                <span>features</span>
                <br></br>
              </span>
              <h2 className="home-features-heading heading2">Features</h2>
              <span className="home-features-sub-heading">
                Enhance efficiency and transparency in postgraduate program
                administration with these key features
              </span>
            </div>
            <div className="home-container06">
              <FeatureCard
                Heading="Dashboard"
                SubHeading="Key metrics for program overview"
              ></FeatureCard>
              <FeatureCard
                Heading="Student Management"
                SubHeading="Profiles, academic history, and financial records"
              ></FeatureCard>
              <FeatureCard
                Heading="Course Management"
                SubHeading="Creation and scheduling tools"
              ></FeatureCard>
              <FeatureCard
                Heading="Financial Module"
                SubHeading="Transaction overview and budgeting"
              ></FeatureCard>
            </div>
          </div>
        </div>
      </div>
      <div className="home-pricing"></div>
      <div className="home-gallery">
        <div className="home-gallery1">
          <h1 className="home-gallery-heading heading2">Faculties</h1>
          <span className="home-gallery-sub-heading">
            Get a quick overview of the program with key metrics
          </span>
          <div className="home-container07">
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1517483775725-6c25cd824bb2?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDQwNzk1Nnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1509062522246-3755977927d7?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEzfHx0ZWFjaGVyfGVufDB8fHx8MTcwMDQwODMzNHww&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName1"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGRvY3RvcnxlbnwwfHx8fDE3MDA0MDgzMTl8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName3"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1589578527966-fdac0f44566c?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDJ8fGxhd3llcnxlbnwwfHx8fDE3MDA0MDgzMDB8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName2"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1597214840472-aa1eaf0e1fac?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDd8fHZldHxlbnwwfHx8fDE3MDA0MDgyNjR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName4"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1515634928627-2a4e0dae3ddf?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDN8fGFjdG9yfGVufDB8fHx8MTcwMDQwODM1Mnww&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName5"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1625758475456-1f26727c0f99?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDh8fGFncm98ZW58MHx8fHwxNzAwNDA4NDUzfDA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName6"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1551884171-004163219904?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDF8fGZhY3RvcnklMjBmb29kfGVufDB8fHx8MTcwMDQwODUyN3ww&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName7"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcwMDQwNzk1Nnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=400"
              rootClassName="rootClassName8"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1581091013158-5c7184f43b62?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE2fHxjaGVtaWNzfGVufDB8fHx8MTcwMDQwODY1Nnww&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName9"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1622253694238-3b22139576c6?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDIzfHxudXJzZXxlbnwwfHx8fDE3MDA0MDg2NzR8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName10"
            ></GalleryCard3>
            <GalleryCard3
              image_src="https://images.unsplash.com/photo-1485688809171-248861015a63?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDE3fHxtdXNpY2lhbnxlbnwwfHx8fDE3MDA0MDg2OTZ8MA&amp;ixlib=rb-4.0.3&amp;w=1500"
              rootClassName="rootClassName11"
            ></GalleryCard3>
          </div>
        </div>
      </div>
      <div className="home-banner">
        <div className="home-banner1">
          <h1 className="home-banner-heading heading2">
            Streamline Postgraduate Program Administration
          </h1>
          <span className="home-banner-sub-heading">
            Design a mockup for SIGAP at the University of Caldas
          </span>
          <button className="home-banner-button button">Get Started</button>
        </div>
      </div>
      <div className="home-faq"></div>
      <div className="home-footer">
      <footer className="home-footer1">
        <div className="home-container08">
          <span className="home-logo2">SIGAP</span>
          <nav className="home-nav1 home-nav1">
            <span className="home-nav12">Dashboard</span>
            <span className="home-nav22">Student Management</span>
            <span className="home-nav32">Course Management</span>
            <span className="home-nav42">Financial Module</span>
            <span className="home-nav52">Communication Hub</span>
          </nav>
        </div>
        <div className="home-separator"></div>
        <div className="home-container09">
          <span className="home-text6">
            © 2023 Juan Diego Gallego Giraldo, All Rights Reserved.
          </span>
          <div className="home-icon-group1">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon10">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon12">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon14">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </footer>
     </div>
    </div>
  )
}
