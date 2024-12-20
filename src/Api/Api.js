import axios from "axios";
const base_url = "https://pransfoods.com/mach-intl/admin/api/";

export const fetchHomeData = async () => {
  try {
    const response = await axios.get(`${base_url}home`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching home data:", error);
    throw error;
  }
};

export const fetchSiteData = async () => {
  try {
    const response = await axios.get(`${base_url}site-info`);
    return response.data.data;
  } catch (error) {
    console.error("Error fetching site info data:", error);
    throw error;
  }
};


export const sendFormData = async (value) => {
  try {
    const response = await axios.post(`${base_url}contact-enquiry`, value);
    return response.data.message;
  } catch (error) {
    console.error("Error sending form data:", error);
    throw error;
  }
};


export const fetchServiceData = async (url) => {
    try {
      const response = await axios.get(`${base_url}service/${url}`);
      return response.data.data;
    } catch (error) {
      console.error("Error fetching service data:", error);
      throw error;
    }
  };
  
