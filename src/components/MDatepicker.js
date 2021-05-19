import React, { useState } from "react";
import { Form, InputGroup } from '@themesberg/react-bootstrap';
import Datetime from "react-datetime";
import moment from "moment-timezone";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons";

export default function MDatepicker(props) {
    const [date, setDate] = React.useState(props.date || '');

    return(
        <Form>
            <Form.Label>{props.labelText}</Form.Label>
            <Form.Group className="mb-3">
                <Datetime
                    timeFormat={false}
                    closeOnSelect={false}
                    onChange={setDate}
                    renderInput={(props, openCalendar) => (
                        <InputGroup>
                            <InputGroup.Text><FontAwesomeIcon icon={faCalendarAlt} /></InputGroup.Text>
                            <Form.Control
                                required
                                type="text"
                                value={date ? moment(date).format("MM/DD/YYYY") : ""}
                                placeholder="mm/dd/yyyy"
                                onFocus={openCalendar}
                                onChange={() => { }} />
                        </InputGroup>
                    )} />
            </Form.Group>
        </Form>
    );
}
