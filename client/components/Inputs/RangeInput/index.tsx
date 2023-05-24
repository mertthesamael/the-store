"use client"
import { useState } from 'react';
import { Range, getTrackBackground } from 'react-range';



const STEP = 0.1;
const MIN = 0;
const MAX = 100;

const RangeInput = ({rtl}:{rtl:boolean}) => {

    const [values, setValues] = useState([20, 40]);
    return(
        <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          width:'100%',
        }}
      >
        <Range
          values={values}
          step={STEP}
          min={MIN}
          max={MAX}
          rtl={rtl}
          onChange={(values) => setValues(values)}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: '36px',
                display: 'flex',
                width: '100%'
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: '5px',
                  width: '100%',
                  borderRadius: '4px',
                  background: getTrackBackground({
                    values,
                    colors: ['#fff', '#548BF4', '#fff'],
                    min: MIN,
                    max: MAX,
                    rtl
                  }),
                  alignSelf: 'center'
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ index, props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: '30px',
                width: '30px',
                borderRadius: '4px',
                backgroundColor: '#FFF',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                boxShadow: '0px 2px 6px #AAA'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '-28px',
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: '14px',
                  fontFamily: 'Arial,Helvetica Neue,Helvetica,sans-serif',
                  padding: '4px',
                  borderRadius: '4px',
                  backgroundColor: 'white'
                }}
              >
                {values[index].toFixed(1)}
              </div>
              <div
                style={{
                  height: '16px',
                  width: '5px',
                  backgroundColor: isDragged ? 'black' : '#CCC'
                }}
              />
            </div>
          )}
        />
      </div>
    )
}

export default RangeInput;