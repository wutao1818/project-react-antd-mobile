import React from 'react';

class Table extends React.Component {
  render() {
    return (
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    );
  }
}

class Columns extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Hello-td</td>
        <td>World-td</td>
      </React.Fragment>
    );
    // 也可以使用以下方式
    // return (
    //   <>
    //   <td>Hello</td>
    //   <td>World</td>
    //   </>
    // );
  }
}

export default Table;
