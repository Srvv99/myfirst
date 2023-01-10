import "./display.css";
import { useState, useEffect } from "react";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p>
      {isReadMore ? text.slice(0, 50) : text}
      <span onClick={toggleReadMore} style={{ color: "black" }}>
        {isReadMore ? " ...read more" : "...read less"}
      </span>
    </p>
  );
};



const Widgetinfo = () => {

  const [user, setUser] = useState(() => {
    const storedValue = localStorage.getItem('MY_STATE');
    return JSON.parse(storedValue);
  });
  const [post, setPost] = useState(() => {
    const storedValue = localStorage.getItem('MY_POST');
    return JSON.parse(storedValue);
  });





  useEffect(() => {
    Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users"),
      fetch("https://jsonplaceholder.typicode.com/posts")
    ]).then(([resUser, resPost]) => Promise.all([resUser.json(), resPost.json()]))
      .then(([dataUser, dataPost]) => {
        setUser(dataUser);
        localStorage.setItem('MY_STATE', JSON.stringify(user));

        console.log(user);

        setPost(dataPost);
        localStorage.setItem('MY_POST', JSON.stringify(post));

      });
  }, []);

  const pdata = [
    {
      name: 'MongoDb',
      student: 1100,
      fees: 600
    },
    {
      name: 'Javascript',
      student: 350,
      fees: 1500
    },
    {
      name: 'PHP',
      student: 400,
      fees: 700
    },
    {
      name: 'Java',
      student: 1000,
      fees: 500
    },
    {
      name: 'C#',
      student: 900,
      fees: 400
    },
    {
      name: 'C++',
      student: 100,
      fees: 800
    },
  ];


  return (
    <>
      <div className="widgetz">


        <div className="widgetitem">
          <h3 style={{ margin: "5px" }}>Total Number of Courses:</h3>
          <div style={{ fontSize: "100px", backgroundColor: "black", borderRadius: "10px" }}>{pdata.length}</div>

        </div>


        <div className="widgetitem">
          <h3 style={{ margin: "5px" }}>Total Number of Students:</h3>
          <div style={{ fontSize: "60px", backgroundColor: "black", borderRadius: "10px" }}>
            {pdata.reduce((c, s) => {

              return c + s.student;
            }, 0)}

          </div>

        </div>


        <div className="widgetitem">
          <table border="1" style={{ margin: "10px", width: "185px" }}>
            <tr>
              <th style={{ backgroundColor: "black" }}>Course</th>
              <th style={{ backgroundColor: "black" }}>Fees(INR)</th>

            </tr>

            {pdata.map((i) => {
              return <tr>
                <td>{i.name}</td>
                <td>{i.fees}</td>
              </tr>
            })}


          </table>


        </div>
        <div className="widgetitem" style={{ paddingBottom: "50px" }}>
          <h3 style={{ margin: "5px" }}>Total Course Revenue(INR): </h3>
          <div style={{ fontSize: "40px", backgroundColor: "black", borderRadius: "10px" }}>
            {pdata.reduce((c, i) => {
              const sum = (i.fees * i.student);
              return c + sum;
            }, 0)}
          </div>
        </div>

        <div className="widgetitem">
          <h3 style={{ margin: "5px" }}>Total Number of Users:</h3>
          <div style={{ fontSize: "100px", backgroundColor: "black", borderRadius: "10px" }}>{user.length}</div>
        </div>


        {/* <div className="widgetitem">h3</div>
        <div className="widgetitem">h3</div>
        <div className="widgetitem">h3</div> */}

        {/* ///////////////////////////////////////////// */}
        <div className="xyz">
          <h2 style={{ textAlign: "center" }}>Post Lists</h2>



          {/* start of post table */}

          <div className="tableitem">

            <table border="1" style={{ border: "solid", borderColor: "black" }}  >
              <tr style={{ backgroundColor: "black", borderbackgroundColor: "black" }}>
                <th>Id</th>
                <th>Title</th>
                <th>Body</th>
              </tr>

              {post.map((p) => {
                return <tr>
                  <th style={{ color: "black" }}>{p.id}</th>
                  <th style={{ textAlign: "left" }}>{p.title}</th>
                  <th style={{ textAlign: "left" }}><ReadMore>{p.body}</ReadMore></th>
                </tr>
              })}







            </table>
            {/* end of post table */}
          </div>








        </div>

        {/* user table-------------//////////////////// */}

        <div className="xyz">
          <h2 style={{ textAlign: "center" }}>User List</h2>



          

          <div className="tableitem">

            <table border="1" style={{ border: "solid", borderColor: "black" }}  >
              <tr style={{ backgroundColor: "black", borderbackgroundColor: "black" }}>
                <th>Name</th>
                <th>Email</th>
                <th>Username</th>
              </tr>

              {user.map((i) => {
                return <tr>
                  <th>{i.name}</th>
                  <th>{i.email}</th>
                  <th>{i.username}</th>
                </tr>
              })}







            </table>
           
          </div>








        </div>
        






      </div>
    </>
  );


}

export default Widgetinfo;