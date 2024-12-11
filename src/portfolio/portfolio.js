import React, { useState, useEffect } from "react";
import { Button, Menu, Drawer, Card } from "antd";
import { UpOutlined, MenuOutlined } from "@ant-design/icons"; // Importing the scroll-to-top and hamburger menu icon
import "bootstrap/dist/css/bootstrap.min.css";
import "./portfolio.css";
import {
  MailOutlined,
  GithubOutlined,
  LinkedinOutlined,
  PhoneOutlined,
  CodeOutlined,
} from "@ant-design/icons";

const menuItems = [
  { key: "about", label: "About", target: "#about" },
  { key: "projects", label: "Projects", target: "#projects" },
  { key: "skills", label: "Skills", target: "#skills" },
  { key: "contact", label: "Contact", target: "#contact" },
];

const Portfolio = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);
  const [drawerVisible, setDrawerVisible] = useState(false);

  const toggleDrawer = () => {
    setDrawerVisible(!drawerVisible);
  };

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (
        window.scrollY >=
          document.getElementById("skills").offsetTop - window.innerHeight &&
        window.scrollY <
          document.getElementById("contact").offsetTop - window.innerHeight
      ) {
        setShowScrollToTop(true);
      } else if (
        window.scrollY >=
        document.getElementById("contact").offsetTop - window.innerHeight
      ) {
        setShowScrollToTop(true);
      } else {
        setShowScrollToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio">
      <nav className="navbar">
        <div className="logo mx-4">Navya Sri Kurapati</div>
        <nav className="navbar navbar-expand-lg ">
          <div className="container">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                {menuItems.map((item) => (
                  <li key={item.key} className="nav-item">
                    <a
                      className="nav-link text-white fw-bolder  nav-menu-item"
                      href={item.target}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>

        {/* Hamburger Icon for Mobile and Tablet */}
        <Button
          className="hamburger-icon"
          type="link"
          onClick={toggleDrawer}
          style={{ display: "none" }} // Hidden by default
        >
          <MenuOutlined style={{ fontSize: "24px", color: "#fff" }} />
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Hello, I'm a Data Scientist</h1>
          <p className="hero-subtitle">
            Transforming raw data into actionable insights, this field harnesses
            machine learning, statistical methods, and analytical expertise to
            power innovation and strategic decision-making
          </p>
          <a
            target="_blank"
            href="https://www.dropbox.com/scl/fo/lc4k9pzvmilif4ndtj79k/AM6ohu4f4SyJET18T_aXXUM?rlkey=m68314cg20xst9o2n4qdd0o90&st=kqvbeb5p&dl=0"
            download
          >
            <Button className="hero-button" type="primary">
              Explore My Resume
            </Button>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <h2 className="fw-bolder">About Me</h2>
        <p>
          I am a data scientist passionate about analyzing complex datasets and
          delivering actionable insights. I have a strong background in machine
          learning, data visualization, and storytelling with data.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <h2 className="fw-bolder">Projects</h2>
        <div className="project-cards">
          <Card
            title="Advanced Personal Finance Optimization using ML"
            className="project-card"
          >
            <div className="row">
              <span className="fw-bolder"> Objective: </span>
              <span>
                Built a tool to analyze spending patterns, predict future
                expenses, and recommend financial strategies.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Data Processing: </span>
              <span>
                Used Python, Pandas, and NumPy for data cleaning and feature
                engineering.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Modeling: </span>
              <span>
                Applied clustering algorithms (K-Means) and predictive models
                (Random Forest, Gradient Boosting) using Scikit-learn.
              </span>
            </div>
            <div className="row">
              <span className="fw-bolder"> Visualization: </span>
              <span>
                Created insightful charts using Matplotlib and Seaborn for
                spending trends and optimization insights.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Deployment: </span>
              <span>
                Developed an interactive web application with Streamlit for
                real-time financial tracking.
              </span>
            </div>
          </Card>

          <Card
            title="Automated Resume Screening with NLP"
            className="project-card"
          >
            <div className="row">
              <span className="fw-bolder"> Objective: </span>
              <span>
                Developed an AI-powered tool to rank resumes based on job
                descriptions using advanced NLP techniques.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Dataset: </span>
              <span>
                Utilized the Updated Resume Dataset to train and validate the
                model.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Text Processing: </span>
              <span>
                Applied text preprocessing techniques (tokenization, stemming,
                and lemmatization) using NLTK and SpaCy.
              </span>
            </div>
            <div className="row">
              <span className="fw-bolder"> Embedding Models: </span>
              <span>
                Used BERT embeddings for semantic similarity between resumes and
                job descriptions.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Modeling: </span>
              <span>
                Implemented ranking algorithms to match candidate profiles with
                job requirements.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Deployment: </span>
              <span>
                Built a recruiter-friendly web interface using Flask for
                real-time resume ranking.
              </span>
            </div>
          </Card>

          <Card
            title="Stock Prediction Using Random Forest Regressor"
            className="project-card"
          >
            <div className="row">
              <span className="fw-bolder"> Objective: </span>
              <span>
                Built a machine learning model to predict future stock prices
                based on historical data using a Random Forest Regressor.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Data Handling: </span>
              <span>
                Collected and cleaned stock data using Pandas; visualized trends
                using Matplotlib.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Feature : </span>
              <span>
                Engineering: Utilized features like Open, High, Low, and Volume
                to predict the closing price.
              </span>
            </div>
            <div className="row">
              <span className="fw-bolder"> Modeling: </span>
              <span>
                Trained and tested the model using scikit-learn's
                RandomForestRegressor, achieving high predictive accuracy.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Prediction: </span>
              <span>
                Successfully forecasted stock prices, demonstrating the model's
                potential for financial analysis.
              </span>
            </div>
          </Card>

          <Card
            title="Spotify Tracks Dataset Analysis"
            className="project-card"
          >
            <div className="row">
              <span className="fw-bolder"> Objective: </span>
              <span>
                Explored Spotify’s track dataset to analyze trends,
                correlations, and song features.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Data Handling: </span>
              <span>
                Cleaned and processed 448,081 rows using Pandas, transforming
                song durations for better interpretation.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Analysis & Visualization : </span>
              <span>
                Identified least and most popular songs, visualized correlations
                through heatmaps, explored trends like loudness vs. energy using
                regression plots, and analyzed duration changes over time with
                bar and line charts.
              </span>
            </div>
            <div className="row">
              <span className="fw-bolder"> Outcome: </span>
              <span>
                Delivered actionable insights into musical trends using Python
                libraries like Pandas, NumPy, Matplotlib, and Seaborn.
              </span>
            </div>
          </Card>

          <Card
            title="San Francisco Employee Salary Analysis"
            className="project-card"
          >
            <div className="row">
              <span className="fw-bolder"> Objective: </span>
              <span>
                Analyzed a dataset of 148,654 employee records to uncover salary
                trends and job title insights
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Data Handling: </span>
              <span>
                Cleaned dataset using Pandas, removing irrelevant columns like
                'Id', 'Notes', and 'Status'.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Feature : </span>
              <span>
                Conducted statistical analysis on BasePay, exploring job title
                frequencies and department-specific data.Analyzed BasePay (min,
                max, average) and handled missing values.
              </span>
            </div>
            <div className="row">
              <span className="fw-bolder"> Grouped Insights: </span>
              <span>
                Trained and tested the model using scikit-learn's
                RandomForestRegressor, achieving high predictive accuracy.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Prediction: </span>
              <span>
                Grouped data to calculate average BasePay by year and job title,
                uncovering salary trends across roles like 'ACCOUNTANT' and
                departmental variations.
              </span>
            </div>
          </Card>

          <Card
            title="Netflix TV Shows & Movies Analysis"
            className="project-card"
          >
            <div className="row">
              <span className="fw-bolder"> Objective: </span>
              <span>
                Analyzed Netflix content to uncover insights on distribution,
                release years, and countries.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Dataset Overview: </span>
              <span>
                7,789 rows and 11 columns, including show ID, category, title,
                director, cast, country, and rating. Used Pandas functions
                (head(), tail(), info()) for basic dataset exploration.
              </span>
            </div>

            <div className="row">
              <span className="fw-bolder"> Data Cleaning : </span>
              <span>
                Checked and removed duplicates using duplicated() and
                drop_duplicates(). Handled missing values and visualized them
                with a Seaborn heatmap.
              </span>
            </div>
            <div className="row">
              <span className="fw-bolder"> Key Analysis Tasks : </span>
              <span>
                Analyzed key trends such as the most frequent release year,
                distribution of movies vs. TV shows, and country-specific
                content, including exclusive shows in India and top directors. -
                Explored Tom Cruise's cast count, 'TV-14' ratings in Canada, and
                identified the longest-duration show, providing insights into
                Netflix's content diversity and regional preferences.
              </span>
            </div>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="about">
        <h2 className="fw-bolder">Skills</h2>
        <ul className="skills-list">
          <li>Python</li>
          <li>SQL</li>
          <li>Scikit-Learn</li>
          <li>Pandas</li>
          <li>Numpy</li>
          <li>Pytorch</li>
          <li>Tensorflow</li>
          <li>Keras</li>
          <li>Matplotlib</li>
          <li>Seaborn</li>
          <li>Django</li>
          <li>Azure Data Factory</li>
          <li>Power BI</li>
          <li>GitHub</li>
          <li>GitHub</li>
          <li>Git</li>
          <li>NLTK</li>
          <li>Python Programming with Data Structures & Algorithms</li>
          <li>Data Analytics</li>
          <li>Machine Learning Foundations and Applications</li>
          <li>Deep Learning Foundations and Applications</li>
          <li>Artificial Intelligence Foundations and Applications</li>
          <li>Probability and Statistics</li>
          <li>NLP</li>
          <li>Artificial Intelligence for Manufacturing</li>
          <li>Large Language Models(LLM), </li>
          <li>OOPS </li>
        </ul>
      </section>

      {/* Contact Section */}
      {/* Contact Section */}
      <section id="contact" className="contact">
        <h2 className="fw-bolder">Contact</h2>
        <p>
          If you'd like to get in touch, feel free to reach out via any of the
          following:
        </p>
        <div className="contact-links">
          <a
            href="mailto:ittechniciannavya@gmail.com"
            className="fw-bolder mx-2 text-decoration-none"
          >
            <i className="me-2">
              <MailOutlined />
            </i>
            Email
          </a>
          <a
            href="https://github.com/Navy333"
            target="_blank"
            rel="noopener noreferrer"
            className="fw-bolder mx-2 text-decoration-none"
          >
            <i className="me-2">
              <GithubOutlined />
            </i>
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/ittechniciannavya/"
            target="_blank"
            rel="noopener noreferrer"
            className="fw-bolder mx-2 text-decoration-none"
          >
            <i className="me-2">
              <CodeOutlined />
            </i>
            LeetCode
          </a>
          <a
            href="https://www.linkedin.com/in/navyasrik/"
            target="_blank"
            rel="noopener noreferrer"
            className="fw-bolder mx-2 text-decoration-none"
          >
            <i className="me-2">
              <LinkedinOutlined />
            </i>
            LinkedIn
          </a>
          <a
            href="tel:+91 6281237874"
            className="fw-bolder mx-2 text-decoration-none"
          >
            <i className="me-2">
              <PhoneOutlined />
            </i>
            Phone
          </a>
        </div>
      </section>

      {/* Scroll-to-top icon */}
      {showScrollToTop && (
        <div className="scroll-to-top" onClick={scrollToTop}>
          <UpOutlined style={{ fontSize: "24px", color: "#1890ff" }} />
        </div>
      )}
    </div>
  );
};

export default Portfolio;
