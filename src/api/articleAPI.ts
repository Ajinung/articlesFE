import axios from "axios";
import mongoose from "mongoose";

interface iArticle {
  title?: string;
  category?: string;
  content?: string;
  description?: string;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
  v?: string;
}

interface iArticleCreated {
  title?: string;
  category?: string;
  content?: string;
  description?: string;
}

const url = "http://localhost:3344/api/v1";

export const getArticles = async () => {
  return await axios.get(`${url}/get-articles`).then((res: any) => {
    return res.data.data;
  });
};

export const getOneArticle = async (articleID: string) => {
  return await axios
    .get(`${url}/${articleID}/get-one-article`)
    .then((res: any) => {
      return res.data.data;
    });
};

export const createArticle = async (data: {}) => {
  return await axios.post(`${url}/create-articles`, data).then((res: any) => {
    return res.data.data;
  });
};
