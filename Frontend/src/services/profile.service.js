import { BsTrophy } from "react-icons/bs";
import HttpService from "./http.service";
class ProfileService extends HttpService {
  createProfile = async (data) => {
    try {
      let response = await this.postRequest("/v1/profile", data, {
        auth: true,
        file: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  getProfileById = async (id) => {
    try {
      let response = await this.getRequest(`/v1/profile/${id}`, {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
  updateProfile = async (details, id) => {
    try {
      let response = await this.putRequest("/v1/profile/" + id, details, {
        auth: true,
        file: true,
      });
      return response;
    } catch {
      throw exception;
    }
  };
  createBio = async (bio) => {
    try {
      let response = await this.postRequest("/v1/profile/createBio", bio, {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };

  firstEdit = async (data) => {
    try {
      let response = await this.postRequest("/v1/profile/firstEdit", data, {
        auth: true,
      });
      return response;
    } catch (exception) {
      throw exception;
    }
  };
}

const profileSvc = new ProfileService();
export default profileSvc;
