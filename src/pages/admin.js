import React, { Component } from 'react';
import Create from '../component/addposts';
import AdminHeader from '../component/adminheader';
import Footer from '../component/footer';
import MyPosts from '../component/myposts';

class admin extends Component {
    render() {
        return (
            <div>
                <AdminHeader/>
              <MyPosts/>
                <Footer/>
            </div>
        );
    }
}

export default admin;