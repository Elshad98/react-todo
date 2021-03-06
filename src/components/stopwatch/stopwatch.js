import React from 'react';

import Button from '../button';

import './stopwatch.css';

class Stopwatch extends React.Component {

    state = {
        running: false,
        elapsed: 0,
        lastTick: 0
    };

    componentDidMount() {
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    tick = () => {
        if (this.state.running) {
            const now = Date.now();
            const diff = now - this.state.lastTick;

            this.setState({
                elapsed: this.state.elapsed + diff,
                lastTick: now
            });
        }
    }

    handleStart = () => {
        this.setState({
            running: true,
            lastTick: Date.now()
        });
    }

    handlePause = () => {
        this.setState({
            running: false
        });
    }

    handleStop = () => {
        this.setState({
            running: false,
            elapsed: 0,
            lastTick: 0
        });
    }

    format(milliseconds) {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;

        return `${minutes > 9 ? minutes : '0' + minutes}:${seconds > 9 ? seconds : '0' + seconds}`;
    }

    render() {
        const time = this.format(this.state.elapsed);
        return (
            <section className='stopwatch'>
                <div className='stopwatch-time'>{time}</div>
                <div className='stopwatch-controls'>
                    {this.state.running ?
                        <Button className='icon' onClick={this.handlePause} icon='pause' />
                        :
                        <Button className='icon' onClick={this.handleStart} icon='play_arrow' />
                    }
                    <Button className='icon' onClick={this.handleStop} icon='stop' />
                </div>
            </section>
        );
    }
}

export default Stopwatch;