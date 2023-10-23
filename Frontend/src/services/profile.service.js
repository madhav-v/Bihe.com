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
}

const profileSvc = new ProfileService();
export default profileSvc;
