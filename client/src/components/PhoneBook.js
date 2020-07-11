import React, { Component } from 'react';
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';


const { Meta } = Card;


const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
        console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
    },
    getCheckboxProps: record => ({
        disabled: record.name === 'Disabled User', // Column configuration not to be checked
        name: record.name,
    }),
};


class Movies extends React.Component {
    render() {
        return (
            <div>
                {/* <MoviesProfile id = {this.props.id} img = {this.props.img} title = {this.props.title} />
                <MoviesInfo actor1 = {this.props.actor1} actor2={this.props.actor2} actor3 = {this.props.actor3}/> */}
                <MoviesCardInfo
                    id={this.props.id} img={this.props.img} name={this.props.name}
                    phone={this.props.phone} address={this.props.address} 
                />
            </div>
        );
    }
}

class MoviesProfile extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.img} alt="poster" />
                <h2>{this.props.title}({this.props.id})</h2>
            </div>
        );
    }
}

class MoviesInfo extends React.Component {
    render() {
        return (
            <div>
                <p>{this.props.actor1}</p>
                <p>{this.props.actor2}</p>
                <p>{this.props.actor3}</p>
            </div>
        );
    }
}

class MoviesCardInfo extends React.Component {
    render() {
        return (
            // <div>
            //     <img src={this.props.img} alt="poster"/>
            //     <h2>{this.props.title}({this.props.id})</h2>
            //     <p>{this.props.actor1}</p>
            //     <p>{this.props.actor2}</p>
            //     <p>{this.props.actor3}</p>
            // </div>
            <Card
                style={{ width: 300 }}
                cover={
                    <img
                        alt="example"
                        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                    />
                }
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit" />,
                    <EllipsisOutlined key="ellipsis" />,
                ]}
            >
                <Meta
                    avatar={<Avatar src={this.props.img} />}
                    title={this.props.name}
                    description={this.props.phone}
                />
            </Card>
        );
    }
}


export default Movies