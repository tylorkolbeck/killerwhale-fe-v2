import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'

const useStyles = makeStyles(({ palette, fontSize }) => ({
  root: {
    color: ({ color }) => {
      if (color) {
        return color
      } else {
        return palette.type === 'light' ? 'rgba(0,0,0,.8)' : 'white'
      }
    },
    marginBottom: '10px',
    fontSize: ({ fontSize }) => {
      if (fontSize) {
        return fontSize
      } else {
        return '16px'
      }
    },
    lineHeight: ({ lineHeight }) => (lineHeight ? lineHeight : 'inherit')
  }
}))

export default function BodyText({
  children,
  color,
  fontSize,
  lineHeight,
  style
}) {
  const classes = useStyles({ color, fontSize, lineHeight })
  return (
    <Typography variant="body1" className={classes.root} style={style}>
      {children}
    </Typography>
  )
}
