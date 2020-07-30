import React from 'react'
import Button from '../../../antd/button'
import User from '../../FC/sfc/button'

export default () => {
    return (
        <React.Fragment>
            <Button
                text='按钮'
                type='default'
                size='xm'
                onClick={() => { alert('我点了！！！') }}
            />
            <Button
                text='按钮'
                type='danger'
                size='lg'
            />
            <User />
        </React.Fragment>
    )
}