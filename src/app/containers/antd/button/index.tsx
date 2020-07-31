import React from 'react'
import Button from '../../../antd/button'
import User from '../../FC/sfc/button'

export default () => {
    return (
        <React.Fragment>
            <Button
                text='按钮'
                styleType='default'
                autoFocus
                size='xm'
                onClick={() => { alert('我点了！！！') }}
            />
            <Button
                text='按钮'
                styleType='danger'
                size='lg'
            />
            <User />
        </React.Fragment>
    )
}