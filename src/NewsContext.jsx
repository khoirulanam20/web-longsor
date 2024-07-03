import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/everything?q=earthquake OR flood OR hurricane OR wildfire OR landslide&apiKey=64ba83de889d459e87df3521ea73f776"
        );
        setNews(response.data.articles);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching news:", error);
        setError("Error fetching news. Please try again later.");
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <NewsContext.Provider value={{ news, loading, error }}>
      {children}
    </NewsContext.Provider>
  );
};
