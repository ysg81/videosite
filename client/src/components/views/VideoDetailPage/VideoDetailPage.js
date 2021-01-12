import React from 'react'
import {Col, Row, List, Avatar} from 'antd';

function VideoDetailPage() {
    return (
        <Row gutter={[16,16]}>
            <Col lg={18} xs={24}>
                <div style={{width:'100%', padding:'3rem 4rem'}}>
                    <video style={{width:'100%'}} src controls />
                    <List.Item
                        actions
                    >
                        <List.Item.Meta
                            avatar
                            title
                            description
                        />

                    </List.Item>
                    
                </div>
            </Col>

            <Col lg={6} xs={24}>
                    Side Videos
            </Col>
        </Row>
    );
}

export default VideoDetailPage