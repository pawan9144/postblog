// import React, { useState,useEffect} from 'react';
// import { EditorState, convertToRaw } from 'draft-js';
// import { Editor } from 'react-draft-wysiwyg';
// import draftToHtml from 'draftjs-to-html';
// import { convertToHTML } from "draft-convert";
// import { useParams,useNavigate} from 'react-router-dom';
// import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

// import axios from 'axios';

// function Edit() {


//     const [convertedContent, setConvertedContent] = useState(null);
//   const [userInfo, setuserInfo] = useState({
//     blogTitle: null,
//     blogImage: null
//   });


//   const onChangeValue = (e) => {
//     setuserInfo({
//       ...userInfo,
//       [e.target.name]: e.target.value
//     });
//   }

//   const uploadPicture = (e) => {
//     setuserInfo({
//       ...userInfo,
//       [e.target.name]: e.target.files[0],
//     });
//   };
//   const { id } = useParams();
//   const navigate =useNavigate()

//   let editorState = EditorState.createEmpty();
//   const [Description, setDescription] = useState(editorState);
//   const onEditorStateChange = (editorState) => {
//     setDescription(editorState);
//     let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
//     setConvertedContent(currentContentAsHTML);
//   };

//   const [isError, setError] = useState(null);

//   useEffect(() => {
//     getdata()
//   }, []);
 
 
 
//   const addDetails = async (event) => {
//  try {
//       event.preventDefault();
//       event.persist();
//       if (userInfo.Description.value.length < 5) {
//         setError('Required, Add description minimum length 50 characters');
//         return;
//       }

//       let formData = new FormData();
//       const removeHTML=(str)=>{ 
//         let tmp = document.createElement("DIV");
//         tmp.innerHTML = str;
//           return tmp.textContent || tmp.innerText || "";
//       }
//       const updatedDes = removeHTML(userInfo.Description.value)
//       formData.append("blogTitle", userInfo.blogTitle);
//       formData.append("blogImage", userInfo.blogImage);
//       formData.append("Description", updatedDes);
//       const res = await axios.put("https://afraid-fish-43.loca.lt/api/postblog/update/" + id, formData);
//       console.log("update success fully....")

//     } catch (error) { throw error; }
//   }



//   const getdata = async (e) => {
//     try {
//       const url = "https://afraid-fish-43.loca.lt/api/postblog/postblog/" + id;
//       const res = await axios.get(url);
//       console.log(res);
//       setuserInfo(res.data.blog);
    
//     } catch {
//       console.warn("error");
//     }
//   };




//   return (
//     <>
//       <div className="App">
//         <div className="container">
//           <div className="row">

//             <form onSubmit={addDetails} className="update__forms">
//               <h3 className="myaccount-content"> Add  </h3>
//               <div className="form-row">
//                 <div className="form-group col-md-12">
         
//                   <label className="font-weight-bold"> Title <span className="required"> * </span> </label>
//                   <input type="text" name="blogTitle" value={userInfo.blogTitle} onChange={onChangeValue} className="form-control" placeholder="Title" required />
//                 </div>
//                 <div className="form-group col-md-12">
//                   <label className="font-weight-bold"> Image <span className="required"> * </span> </label>
//                   <input type="file" name="blogImage" onChange={uploadPicture} className="form-control" placeholder="Title" />
//                 </div>
//                 <div className="form-group col-md-12 editor">
//                   <label className="font-weight-bold"> Description <span className="required"> * </span> </label>
//                   <Editor
//                     editorState={Description}
//                     toolbarClassName="toolbarClassName"
//                     wrapperClassName="wrapperClassName"
//                     editorClassName="editorClassName"
//                     onEditorStateChange={onEditorStateChange}
//                   />
//                   <textarea style={{ display: 'none' }} disabled ref={(val) => userInfo.Description = val} value={draftToHtml(convertToRaw(Description.getCurrentContent()))} />
//                 </div>
//                 {isError !== null && <div className="errors"> {isError} </div>}
//                 <div className="form-group col-sm-12 text-right">
//                   <button type="submit" className="btn btn__theme"> Submit  </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }
// export default Edit



import React, { useState, useEffect } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
//import draftToHtml from 'draftjs-to-html';
import { useParams, useNavigate } from "react-router-dom";
import { convertFromHTML, convertToHTML } from "draft-convert";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import { REACT_APP } from "../services/env.config";




function Edit() {
  const [convertedContent, setConvertedContent] = useState(null);
  const [userInfo, setuserInfo] = useState({
    blogTitle: null,
    blogImage: null
  });

  const onChangeValue = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.value
    });
  };
  const uploadPicture = (e) => {
    setuserInfo({
      ...userInfo,
      [e.target.name]: e.target.files[0]
    });
  };
  const { id } = useParams();
  const navigate =useNavigate()



  let editorState = EditorState.createEmpty();
  const [Description, setDescription] = useState(editorState);
  const onEditorStateChange = (editorState) => {
    setDescription(editorState);
    let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(currentContentAsHTML);
  };

  const [isError, setError] = useState(null);
  useEffect(() => {
    getdata();
  }, []);
  const addDetails = async (event) => {
    try {
      event.preventDefault();
      event.persist();
      // if (userInfo.Description.value.length < 5) {
      //   setError("Required, Add description minimum length 50 characters");
      //   return;
      // }
      let formData = new FormData();
    //   const removeHTML = (str) => {
    //     let tmp = document.createElement("DIV");
    //     tmp.innerHTML = str;
    //     return tmp.textContent || tmp.innerText || "";
    //   };
    //   const updatedDes = removeHTML(userInfo.Description.value);
      formData.append("blogTitle", userInfo.blogTitle);
      formData.append("blogImage", userInfo.blogImage);
      formData.append("Description", convertedContent)


      const res = await axios.put(`${REACT_APP}/api/postblog/update/`+ id,formData);
      navigate("/blog")
      console.log("update success fully....",res);
    } catch (error) {
      throw error;
    }
  };
  const getdata = async (e) => {
    try {
      const url = `${REACT_APP}/api/postblog/postblog/` + id;
      const res = await axios.get(url);
      console.log(res.data.blog);
      setuserInfo(res.data.blog);
      const html =res.data.blog.Description;
        // "<div><p>hello kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk</p></div>";
      const blocksFromHTML = convertFromHTML(html);
      setDescription(EditorState.createWithContent(blocksFromHTML));
    } catch {
      console.warn("error");
    }
  };
  return (
    <>
      <div className="App">
        <div className="container">
          <div className="row">
            <form onSubmit={addDetails} className="update__forms">
              <h3 className="myaccount-content"> Add </h3>
              <div className="form-row">
                <div className="form-group col-md-12">
          
                  <label className="font-weight-bold">
                    {" "}
                    Title <span className="required"> * </span>{" "}
                  </label>
                  <input
                    type="text"
                    name="blogTitle"
                    value={userInfo.blogTitle}
                    onChange={onChangeValue}
                    className="form-control"
                    placeholder="Title"
                    required
                  />
                </div>
                <div className="form-group col-md-12">
                  <label className="font-weight-bold">
                    {" "}
                    Image <span className="required"> * </span>{" "}
                  </label>
                  <input
                    type="file"
                    name="blogImage"
                    onChange={uploadPicture}
                    className="form-control"
                    placeholder="Title"
                  />
                </div>
                <div className="form-group col-md-12 editor">
                  <label className="font-weight-bold">
                    {" "}
                    Description <span className="required"> * </span>{" "}
                  </label>
                  <Editor
                    editorState={Description}
                    toolbarClassName="toolbarClassName"
                    wrapperClassName="wrapperClassName"
                    editorClassName="editorClassName"
                    onEditorStateChange={onEditorStateChange}
                  />
                  {/* <textarea style={{ display: 'none' }} disabled ref={(val) => userInfo.Description = val} value={draftToHtml(convertToRaw(Description.getCurrentContent()))} /> */}
                </div>

                {isError !== null && <div className="errors"> {isError} </div>}
                <div className="form-group col-sm-12 text-right">
                  <button type="submit" className="btn btn__theme">
                    {" "}
                    Submit{" "}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Edit;







// import React, { useState } from "react";
// import { EditorState, convertToRaw } from "draft-js";
// import { Editor } from "react-draft-wysiwyg";
// //import draftToHtml from 'draftjs-to-html';
// import { convertToHTML } from "draft-convert";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
// import axios from "axios";
// import { Navigate, useNavigate } from "react-router-dom";
// import { REACT_APP } from "../services/env.config";

// function Addblogs() {
//   const [convertedContent, setConvertedContent] = useState(null);
//   const [userInfo, setuserInfo] = useState({
//     blogTitle: null,
//     blogImage: null
//   });
//   const onChangeValue = (e) => {
//     setuserInfo({
//       ...userInfo,
//       [e.target.name]: e.target.value
//     });
//   };
//   const uploadPicture = (e) => {
//     setuserInfo({
//       ...userInfo,
//       [e.target.name]: e.target.files[0]
//     });
//   };


//   const navigate =useNavigate()
//   let editorState = EditorState.createEmpty();
//   const [Description, setDescription] = useState(editorState);
//   const onEditorStateChange = (editorState) => {
//     setDescription(editorState);
//     let currentContentAsHTML = convertToHTML(editorState.getCurrentContent());
//     setConvertedContent(currentContentAsHTML);
//   };
//   const [isError, setError] = useState(null);
//   const addDetails = async (event) => {
//     try {
//       event.preventDefault();
//       event.persist();
//       if (convertedContent.length < 50) {
//         setError("Required, Add description minimum length 50 characters");
//         return;
//       }
//       console.log("0000", convertedContent);
//       let formData = new FormData();
//       formData.append("blogTitle", userInfo.blogTitle);
//       formData.append("blogImage", userInfo.blogImage);
//       formData.append("Description", convertedContent);
//       const res = await axios.post(`${REACT_APP}/api/postblog/postblog`,formData);
//       // axios.post(`https://curly-elephant-46.loca.lt/api/postblog/postblog`, {
//       //   blogTitle:userInfo.blogTitle,
//       //   blogImage: blogImage,
//       //   Description: userInfo.Description.value
//       // })
//       navigate("/blog")
//     } catch (error) {
//       throw error;
//     }
//   };
//   return (
//     <>
//       <div className="App">
//         <div className="container">
//           <div className="row">
//             <form onSubmit={addDetails} className="update__forms">
//               <h3 className="myaccount-content"> Add </h3>
//               <div className="form-row">
//                 <div className="form-group col-md-12">
//                   <label className="font-weight-bold">
//                     {" "}
//                     Title <span className="required"> * </span>{" "}
//                   </label>
//                   <input
//                     type="text"
//                     name="blogTitle"
//                     value={userInfo.blogTitle}
//                     onChange={onChangeValue}
//                     className="form-control"
//                     placeholder="Title"
//                     required
//                   />
//                 </div>
//                 <div className="form-group col-md-12">
//                   <label className="font-weight-bold">
//                     {" "}
//                     Image <span className="required"> * </span>{" "}
//                   </label>
//                   <input
//                     type="file"
//                     name="blogImage"
//                     onChange={uploadPicture}
//                     className="form-control"
//                     placeholder="Title"
//                   />
//                 </div>
//                 <div className="form-group col-md-12 editor">
//                   <label className="font-weight-bold">
//                     {" "}
//                     Description <span className="required"> * </span>{" "}
//                   </label>
//                   <Editor
//                     editorState={Description}
//                     toolbarClassName="toolbarClassName"
//                     wrapperClassName="wrapperClassName"
//                     editorClassName="editorClassName"
//                     onEditorStateChange={onEditorStateChange}
//                   />
//                   {/* <textarea style={{ display: 'none' }} disabled ref={(val) => userInfo.Description = val} value={draftToHtml(convertToRaw(Description.getCurrentContent()))} /> */}
//                 </div>
//                 {isError !== null && <div className="errors"> {isError} </div>}
//                 <div className="form-group col-sm-12 text-right">
//                   <button type="submit" className="btn btn__theme">
//                     {" "}
//                     Submit{" "}
//                   </button>
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
// export default Addblogs;