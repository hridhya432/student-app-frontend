import React, { useState } from 'react'
import Nav from './Nav'

const Viewstudent = () => {
  const[data,setData]=new useState(
    [
      {"name":"asc","rollno":3,"Admissionno":2344,"college":"fisat"},
      {"name":"asc","rollno":3,"Admissionno":2344,"college":"fisat"},
      {"name":"asc","rollno":3,"Admissionno":2344,"college":"fisat"},
      {"name":"asc","rollno":3,"Admissionno":2344,"college":"fisat"},
      {"name":"asc","rollno":3,"Admissionno":2344,"college":"fisat"},
    ]
  )
  return (
    <div>

        <Nav/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Roll no</th>
      <th scope="col">Admission number</th>
      <th scope="col">College</th>
    </tr>
  </thead>
  <tbody>
    
    
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Viewstudent