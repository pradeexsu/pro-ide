
class IOBar extends React.Component {
    render() {
        const closeIcon =
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABmJLR0QA/wD/AP+gvaeTAAACUUlEQVR4nO3dSY7UQBBG4YID9DnYcClQb/reQIs7dP8s2iEFFsZTDpGR7+3LjtRXVg2ynI8HERERERERERERUe8kPfWeoXVh1yzpi6Sfkl56z9IqSd8lvUr62nuWv1owfumj9xlQFoy3Zc2/w6CsMDQDygpDYVA2MFKjbGD0R9nBSImyg9EPRdKTPj7MjvQu6bnpgBWS9Lys5Uivav3tS9K3A+8WjzLslaJjV0b/tc6AMgyGGzgtynAYVkaUYTGsTCjDY1gZUNJgWCOjpMOwRkRJi2GNhJIewxoBZRoMKzLKdBhWRJRpMaxIKNNjWBFQwFjVEwWMjXqggLFTSxQwDtYCBYyT1UQB42I1UMC4WUkUMApVAgWMwt1BAaNSV1DAqNwFlKM3sYFxtZMoYLSoIAoYpSqAAkbpbqCAUasF5eiH95AYn3sPcLJPvQegJZ37nTH0VRK+GxiglK4ABiilKogByt1OYvDXSc0uYLwowC1GKbuC4V4LSsnuYLhjgFKiEhjuWKDcqSSGOyYoV6qB4Y4NyplqYrhzgHKkFhjuXKD8r5YY7pyg/KseGO7coPh6YrgZQHk8YmC4WeZGiYThZpoTJSKGm20ulMgYbsY5UEbAcLPmRhkJw82cE2VEDCsdysgYVhqUDBjW8CiZMKxhUTJiWMOhZMawhkGZAcMKjyIexr9Xl4fx2xZHsd4tFdOxK6X7HiJbKKkwrB2UMLvsrFFSYlgbKP0xrBVKagxrhRIHw1pQfsyAYS0o8bbNsxR1k8WKzbhmIiIiIiIiIiIiCtgfryAl4MTdEXgAAAAASUVORK5CYII=";

        return (
            <div
                className="io-bar bg-dark text-light sticky-bottom"
                hidden={this.props.hide}
            >
                {this.props.children}
                <ButtonIcon iconUrl={closeIcon} />

                <div class="input-bar"></div>
            </div>
        );
    }
}

export default IOBar