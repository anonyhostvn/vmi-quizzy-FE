import React from "react";
import {ResultBoxWrapper} from "./resultBox.style";
import {Button, Card, Col, Row, Space, Statistic} from "antd";
import moment from "moment";
import {RedoOutlined, SendOutlined} from "@ant-design/icons";

const ResultBox = (
    {
        result: {total_score, max_score, is_passed},
        startTime, endTime, handleSubmitTest, requestGetTest, hasTestResult
    }
) => {

    const responsiveCol = {
        xs: 24,
        sm: 24,
        md: 24,
        lg: 12
    }

    return (
        <ResultBoxWrapper>
            <Row>

                <Col {...responsiveCol}>
                    <Card>
                        {
                            hasTestResult ?
                                <Statistic title={'Số câu đúng'} value={total_score} suffix={`/${max_score}`}/> :
                                <Statistic.Countdown title={'Thời còn lại'}
                                                     value={moment.now() + endTime * 1000 - startTime * 1000}/>
                        }
                        <Space>
                            <Button onClick={handleSubmitTest} type={'primary'} icon={<SendOutlined/>} disabled={hasTestResult}> Nộp
                                bài </Button>
                        </Space>
                    </Card>
                </Col>

                <Col {...responsiveCol}>
                    <Card>
                        <Statistic title={'Kết quả'}
                                   value={is_passed ? 'Qua bài thi' : is_passed === false ? 'Trượt bài thi' : 'Đang làm bài thi'}/>
                        <Space>
                            <Button onClick={requestGetTest} danger={true} icon={<RedoOutlined/>} disabled={!hasTestResult}> Làm đề khác </Button>
                        </Space>
                    </Card>
                </Col>

            </Row>
        </ResultBoxWrapper>
    );
}

export default ResultBox;