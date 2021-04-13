import * as React from 'react';
import {getLocalItem, getSessionItem} from 'lt_hello_tao/dist/utils/util';

interface IProps{}
interface IState{}
export default class App extends React.Component<IProps, IState>{
    componentDidMount(){
        getLocalItem();
        getSessionItem();
    }
    render(){
        return <div>hello LT</div>;
    }
}