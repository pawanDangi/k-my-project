let timeout = null;

const searchTimeout = cb => {
  // Clear the timeout if it has already been set.
  // This will prevent the previous task from executing
  // if it has been less than <MILLISECONDS>
  clearTimeout(timeout);

  // Make a new timeout set to go off in 800ms
  timeout = setTimeout(() => {
    cb();
  }, 800);
};

export default searchTimeout;
