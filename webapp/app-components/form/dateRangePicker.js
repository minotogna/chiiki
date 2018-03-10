import './dayPicker.scss'
import './dateRangePicker.scss'

import React from 'react'

import DayPickerInput from 'react-day-picker/DayPickerInput'

import { differenceInMonths, format, parse } from 'date-fns'

const formatDate = date => format(date, 'YYYY-MM-DD')

const parseDate = date => console.log(date) || parse(date)

class DateRangePicker extends React.Component {

  constructor (props) {
    super(props)
    this.handleFromChange = this.handleFromChange.bind(this)
    this.handleToChange = this.handleToChange.bind(this)
    this.state = {
      from: undefined,
      to: undefined,
    }
  }

  componentWillUnmount () {
    clearTimeout(this.timeout)
  }

  focusTo () {
    // Focus to `to` field. A timeout is required here because the overlays
    // already set timeouts to work well with input fields
    this.timeout = setTimeout(() => this.to.getInput().focus(), 0)
  }

  showFromMonth () {
    const {from, to} = this.state
    if (!from) {
      return
    }
    if (differenceInMonths(to, from) < 2) {
      this.to.getDayPicker().showMonth(from)
    }
  }

  handleFromChange (from) {
    // Change the from date and focus the "to" input field
    this.setState({from}, () => {
      if (!this.state.to) {
        this.focusTo()
      }
    })
    this.handleChange(this.props.onFromChange, from)
  }

  handleToChange (to) {
    this.setState({to}, this.showFromMonth)
    this.handleChange(this.props.onToChange, to)
  }

  handleChange (fn, value) {
    if (fn)
      fn(parse(value).toISOString())
  }

  componentWillReceiveProps (nextProps) {
    const {from, to} = nextProps
    this.setState({
      from: from ? parse(from) : undefined,
      to: to ? parse(to) : undefined
    })
  }

  render () {
    const {from, to} = this.state
    const modifiers = {start: from, end: to}

    return <div className="InputFromTo">
      <DayPickerInput
        value={from}
        placeholder="From"
        format="UTC"
        formatDate={formatDate}
        parseDate={parseDate}
        dayPickerProps={{
          selectedDays: [from, {from, to}],
          disabledDays: {after: to},
          toMonth: to,
          modifiers,
          numberOfMonths: 2,
        }}
        onDayChange={this.handleFromChange}
      />
      {'\xA0\xA0\xA0\xA0-\xA0\xA0\xA0\xA0'}
      <span className="InputFromTo-to">
          <DayPickerInput
            ref={el => (this.to = el)}
            value={to}
            placeholder="To"
            format="UTC"
            formatDate={formatDate}
            parseDate={parseDate}
            dayPickerProps={{
              selectedDays: [from, {from, to}],
              disabledDays: {before: from},
              modifiers,
              month: from,
              fromMonth: from,
              numberOfMonths: 2,
            }}
            onDayChange={this.handleToChange}
          />
        </span>

    </div>

  }
}

export default DateRangePicker
