import gift_image from "../../../images/icons/gifts.png";
import cr_image from "../../../images/icons/customer_representive.png";
import service_1_img from "../../../images/service/service_1.png";
import service_2_img from "../../../images/service/service_2.png";
import service_3_img from "../../../images/service/service_3.png";
import service_4_img from "../../../images/service/service_4.png";
import service_5_img from "../../../images/service/service_5.png";
import service_6_img from "../../../images/service/service_6.png";

export const data = [
  {
    title: "Credit Risk Analytics",
    description:
      "Shihaan Tech provides advanced credit risk analytics to assess and manage credit risk in financial transactions. This involves analyzing historical data, market trends and customer behavior to predict and mitigate credit-related challenges.",
    folder_1: {
      icon: gift_image,
      title: "Benefits Realization",
      text_arr: [
        "Improved credit decision-making.",
        "Reduced default rates.",
        "Enhanced portfolio management.",
      ],
    },
    folder_2: {
      icon: cr_image,
      title: "Support",
      text_arr: ["Ongoing monitoring and analysis, Continuous model refinement and assistance in adapting to evolving market conditions."],
    },
    isNextPresent: true,
    image:
      service_1_img },
  {
    title: "Dashboard Building",
    description: "Design and development of intuitive and interactive dashboards to visualize key performance indicators(KPIs), trends and metrics. Dashboards are tailored to meet specific business requirements.",
    folder_1: {
      icon: gift_image,
     title: "Benefits Realization",
      text_arr: ["Enhanced data-driven decision-making.",
        "Improved visiblity into business performance.",
        "Increased operational efficiency."],
    },
    folder_2: {
      icon: cr_image,
      title: "Support",
      text_arr: ["Regular updates, customization based on changing business needs and user training for effective dashboard utilization."],
    },
    isNextPresent: true,
    image:
    service_2_img },
  {
    title: "Recommendation Engines",
    description: "Implementation of recommendation engines leveraging machine learning algorithms. These engines analyze user behaviour, preferences and historical data to provide personalized product or content recommendations.",
    folder_1: {
      icon: gift_image,
     title: "Benefits Realization",
      text_arr: ["Increased customer engagement.",
      "Higher conversion rates.",
      "Enhanced user satisfaction."],
    },
    folder_2: {
      icon: cr_image,
      title: "Support",
      text_arr: ["Continuous monitoring, algorithm optimization and integration with evolving business strategies."],
    },
    isNextPresent: true,
    image:
    service_3_img },
  {
    title: "Data Preparation and Maintenance",
    description:
      "Efficient data preparation services, including data cleaning, transformation and enrichment. Maintenance involves ensuring data quality, accuracy and relevance over time.",
    folder_1: {
      icon: gift_image,
      title: "Benefits Realization",
      text_arr: [
        "Improved data accuracy and reliability.",
        "Enhanced data-driven insights.",
        "Streamlined decision-making processes.",
      ],
    },
    folder_2: {
      icon: cr_image,
      title: "Support",
      text_arr: ["Regular data audits, proactive issue resolution and assistance in adapting to changing data sources."],
    },
    isNextPresent: true,
    image:
    service_4_img },
  {
    title: "Building Data Pipelines & Data Lakes",
    description: "Development and management of robust data pipelines for the seamless flow of data across various systems. This includes data extracton, transformation and loading (ETL) processes. Design and implementation of scalable and secure data lakes for storing and managing large volumes of structured and unstructured data.",
    folder_1: {
      icon: gift_image,
     title: "Benefits Realization",
      text_arr: ["Increased data accesibility.",
      "Improved data integration.",
      "Enhanced data governance.",
      "Facilitates advanced analytics & machine learning."],
    },
    folder_2: {
      icon: cr_image,
      title: "Support",
      text_arr: ["Continuous monitoring optimization of data flow and scalability adjustments based on business growth."],
    },
    isNextPresent: true,
    image:
    service_5_img },
  {
    title: "Other Analytics Services",
    description: "Shihaan Tech offers additional analytics services tailored to specific client needs such as predictive modelling, sentiment analysis and anomaly detection.",
    folder_1: {
      icon: gift_image,
     title: "Benefits Realization",
      text_arr: ["Varied based on specific services but generally includes improved insights, proactive problem indentification and strategic decision support."],
    },
    folder_2: {
      icon: cr_image,
      title: "Support",
      text_arr: ["Continuous improvement, adaptation to changing business requirements and proactive identification of emerging analytics needs"],
    },
    isNextPresent: false,
    image:
    service_6_img },
];
