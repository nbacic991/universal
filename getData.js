import axios from 'axios';

const url = 'http://localhost:5000/api/users';
const userUrl = 'http://localhost:5000/api/users/user/';
const userIDUrl = 'http://localhost:5000/api/users/userid/'

class UsersService {
  // Get Posts
  static getPosts() {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(url);
        const data = res.data;

        resolve(
          data.map(post => ({
            ...post
          }))
        );

      } catch (err) {
        reject(err);
      }
    });
  }

  // Getting user data on login
  static getUserData(username) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${userUrl}${username}`)
        const data = res.data;
        // console.log(data)
        resolve(
          data.map(post => ({
            ...post
          }))
        );
      } catch (err) {
        reject(err)
      }
    })
  }
  // Getting user data on load
  static getUserDataLogin(id) {
    return new Promise(async (resolve, reject) => {
      try {
        const res = await axios.get(`${userIDUrl}${id}`)
        const data = res.data;
        // console.log(data)
        resolve(
          data.map(post => ({
            ...post
          }))
        );
      } catch (err) {
        reject(err)
      }
    })
  }

  // Create Post
  static createPost(text) {
    return axios.post(url, {
      text
    });
  }
  // Delete Post
  static deletePost(id) {
    return axios.delete(`${url}${id}`)
  }

}

export default UsersService
