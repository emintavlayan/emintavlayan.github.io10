document.addEventListener('DOMContentLoaded', () => {
    // 04 Initialize the state object when the document is fully loaded
    const state = initializeState();

    // Attach event listeners to all checkboxes
    document.querySelectorAll('.newcheckbox').forEach(checkbox => {
      checkbox.addEventListener('change', handleCheckboxChange);
    });

    // Apply initial filters based on the default state
    applyFilters();

    // Function to initialize the state object for all checkbox groups
    function initializeState() {
      const initialState = {};
      document.querySelectorAll('.newcheckbox').forEach(checkbox => {
        const group = checkbox.getAttribute('data-group');
        // Create a new set for each group if it doesn't already exist
        if (!initialState[group]) {
          initialState[group] = new Set();
        }
      });
      return initialState; // Return the initialized state
    }

    // Function to handle changes to any checkbox
    function handleCheckboxChange(event) {
      const group = event.target.getAttribute('data-group'); // Get the group of the changed checkbox
      const value = event.target.value; // Get the value of the changed checkbox
      const checked = event.target.checked; // Check if the checkbox is checked or unchecked

      console.log(`Checkbox changed: Group=${group}, Value=${value}, Checked=${checked}`);

      // Update the state and apply filters based on the new state
      updateState(group, value, checked);
      applyFilters();
    }

    // Function to update the state object based on checkbox changes
    function updateState(group, value, checked) {
      if (checked) {
        state[group].add(value); // Add the value to the group's set if checked
      } else {
        state[group].delete(value); // Remove the value from the group's set if unchecked
      }
      console.log('Updated state:', state);
    }

    // Function to apply filters to all items within the wrapper
    function applyFilters() {
      // Select all elements within the wrapper section
      const items = Array.from(document.querySelector('.wrapper section').children);

      console.log('Applying filters to items:', items);

      // Iterate over each item and determine its visibility
      items.forEach(item => {
        const shouldShow = shouldItemBeVisible(item); // Check if the item should be visible
        console.log(`Item ${item.outerHTML} should be ${shouldShow ? 'visible' : 'hidden'}`);
        updateItemVisibility(item, shouldShow); // Update the item's visibility based on the result
      });
    }

    function shouldItemBeVisible(item) {
      // Check every group in the state object
      return Object.keys(state).every(group => {
        const groupSet = state[group];

        // Debugging log
        console.log(`Checking group: ${group}, state: ${Array.from(groupSet)}`);

        // If no checkboxes are selected in the group, skip this group
        if (groupSet.size === 0) return true;

        // Identify all possible classes for the group
        const groupClasses = Array.from(document.querySelectorAll(`.newcheckbox[data-group="${group}"]`))
          .map(checkbox => checkbox.value);

        // Check if the item has any class from the group's possible classes
        const itemHasGroupClass = groupClasses.some(cls => item.classList.contains(cls));

        // Debugging log
        console.log(`Item ${item.outerHTML} has group class for ${group}: ${itemHasGroupClass}`);

        // If the item has no relevant class for this group, it should be visible
        if (!itemHasGroupClass) return true;

        // If the item has a relevant class, check if it matches any selected value
        const itemMatchesSelected = Array.from(groupSet).some(cls => item.classList.contains(cls));

        // Debugging log
        console.log(`Item ${item.outerHTML} matches selected value in ${group}: ${itemMatchesSelected}`);

        return itemMatchesSelected;
      });
    }





    // Function to update the visibility of an item
    function updateItemVisibility(item, shouldShow) {
      if (shouldShow) {
        item.classList.remove('hidden'); // Remove the 'hidden' class to show the item
      } else {
        item.classList.add('hidden'); // Add the 'hidden' class to hide the item
      }
    }

    // Additional styling for navigation unordered lists
    const navUls = document.querySelectorAll('.wrapper nav > ul');
    navUls.forEach(ul => {
      ul.style.paddingLeft = '0'; // Remove padding from unordered lists in the navigation
    });
  });