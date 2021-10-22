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
                    description={expense.descripcion}
                />
                {Number(expense.precio)>0?<h1 className='greenNumbers marginh1weird'>${expense.precio}</h1>:<h1 className='redNumbers marginh1weird'>${expense.precio}</h1>}
            </Card>
        </>
    )
}

export default ExpenseCard
