import React from 'react'
import {Card, Avatar} from 'antd'

import {DeleteOutlined, EditOutlined, EllipsisOutlined} from '@ant-design/icons'

function ExpenseCard({expense}) {

    return (
        <>  

            <Card style={{width:'90%', marginTop:'6px'}} bordered hoverable
            actions={[
                <DeleteOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
              ]} >
                <Card.Meta
                    avatar={
                    <Avatar src={expense.CategoriaExpenseObj.img} />
                    }
                    title={expense.CategoriaExpenseObj.descripcion}
                    style={{color:'red'}}
                    description={expense.descripcion}
                />
                <h1 style={{margin:'10px 0px 0px 50px', color:'red'}}>$-{expense.precio}</h1>
            </Card>
        </>
    )
}

export default ExpenseCard
