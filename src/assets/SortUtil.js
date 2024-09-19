import { ApiData } from "./Data";

// Utility function to group and sort tickets
export const filterTickets = (grouping, sorting) => {
  const { tickets, users } = ApiData;

  // Define all possible group keys based on the selected grouping
  let groupKeys = [];
  if (grouping === "status") {
    groupKeys = ["Todo", "In progress", "Backlog", "Done", "Canceled"];
  } else if (grouping === "user") {
    groupKeys = users.map((user) => user.name);
  } else if (grouping === "priority") {
    groupKeys = ["Urgent", "High", "Medium", "Low", "No priority"];
  }

  // Initialize groupedTickets with empty arrays for each groupKey
  const groupedTickets = groupKeys.reduce((result, groupKey) => {
    result[groupKey] = []; // Initialize with an empty array
    return result;
  }, {});

  // Group tickets based on the selected grouping (status, user, or priority)
  tickets.forEach((ticket) => {
    let groupKey;
    if (grouping === "status") {
      groupKey = ticket.status;
    } else if (grouping === "user") {
      const user = users.find((user) => user.id === ticket.userId);
      groupKey = user && user.name;
    } else if (grouping === "priority") {
      const priorityLevels = {
        4: "Urgent",
        3: "High",
        2: "Medium",
        1: "Low",
        0: "No priority",
      };
      groupKey = priorityLevels[ticket.priority];
    }

    if (groupKey && groupedTickets[groupKey]) {
      groupedTickets[groupKey].push(ticket); // Add the ticket to the appropriate group
    }
  });

  // Sorting within each group based on the selected sorting (priority or title)
  const sortTickets = (tickets) => {
    if (sorting === "priority") {
      return tickets.sort((a, b) => b.priority - a.priority); // Sort by priority descending
    } else if (sorting === "title") {
      return tickets.sort((a, b) => a.title.localeCompare(b.title)); // Sort by title alphabetically
    }
    return tickets;
  };

  // Apply sorting to each group
  Object.keys(groupedTickets).forEach((groupKey) => {
    groupedTickets[groupKey] = sortTickets(groupedTickets[groupKey]);
  });

  return groupedTickets;
};
