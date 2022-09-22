import Head from "next/head";
import ls from "local-storage";
import { v4 } from "uuid";
import { useRouter } from "next/router";

export default function UserImg() {
  return (
    <div className="user-img">
      <div className="img-box">
        <img
          className="create-user__user-img"
          src="https://img.freepik.com/free-vector/cute-cartoon-creature-blue-color-with-horns-feel-dizzy-illustration_1284-64077.jpg?t=st=1663780565~exp=1663781165~hmac=b10ffc9705ef61ab5a107d8ba65ff790e14568fba51fad6a3d80e06877e1fa47"
        />
        <span>Select your Avatar</span>
      </div>
      <div className="img-grid">
        <div className="img-grid_container">
          <div className="img">
            <img src="https://img.freepik.com/free-vector/cute-cartoon-creature-blue-color-with-horns-feel-dizzy-illustration_1284-64077.jpg?t=st=1663780565~exp=1663781165~hmac=b10ffc9705ef61ab5a107d8ba65ff790e14568fba51fad6a3d80e06877e1fa47" />
          </div>
          <div className="img">
            <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-rainbow-sunglasses_23-2149436196.jpg?w=740&t=st=1663784700~exp=1663785300~hmac=3fd846f097bf22c2be0fc9e8bf44561293419566a29e26a9566d855cd4345919" />
          </div>
          <div className="img">
            <img src="https://img.freepik.com/free-psd/3d-illustration-person-tank-top_23-2149436202.jpg?w=740&t=st=1663784728~exp=1663785328~hmac=1b98692a628db8a81e658d200f54cfe3498ccdfd5d7aaf14f41323a9b9b76d83" />
          </div>
          <div className="img">
            <img src="https://img.freepik.com/free-vector/cute-koala-with-cub-cartoon-icon-illustration_138676-2839.jpg?w=740&t=st=1663784874~exp=1663785474~hmac=3287ad82ca24e7e7810953f8d323fe8d572c10c7bc543e1c048a48418b713552" />
          </div>
          <div className="img">
            <img src="https://img.freepik.com/free-psd/3d-girl-character-listening-music-though-headphones_23-2149086085.jpg?w=740&t=st=1663784936~exp=1663785536~hmac=0554e98d78cd93750d59fc746bc07ae79ff92b6f4597a3a225335ecd939a3095" />
          </div>
          <div className="img">
            <img src="https://img.freepik.com/free-psd/3d-illustration-person-with-glasses_23-2149436185.jpg?w=740&t=st=1663780687~exp=1663781287~hmac=50d0a8f0b5ef9ddf3160f00d5637e4bf6dcfb0c7950ba96f4c934b54f4e6e641" />
          </div>
        </div>
      </div>
    </div>
  );
}
