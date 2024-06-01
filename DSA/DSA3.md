STREAMS
    - numbers.stream() :- We convert the list into a stream using the stream() method.
    - collect(Collectors.toList()) :- We use the collect method with Collectors.toList() to gather the 
    filtered elements into a new list.

    List<Integer> number = Arrays.asList(2, 3, 4, 5, 2);
    List<String> names = Arrays.asList("Reflection", "Collection", "stream");
    List<List<String>> al = Arrays.asList(Arrays.asList("Java", "Phython"), Arrays.asList("JS", "TS"));

    1) MAP
        - List<Integer> sq = number.stream().map(x -> x*x).collect(Collectors.toList); // [4, 9, 16, 25, 4]

        - Printing All Key-Value Pairs
                map.entrySet().stream().forEach(entry -> System.out.println(entry.getKey() + ": " + 
                                entry.getValue()));
            This uses a stream to iterate over the map's entries and print each key-value pair. 

        - Filtering Entries:
                Map<String, Integer> filteredMap = map.entrySet().stream().filter(entry -> 
                    entry.getValue() > 3).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));
            This filters the entries where the value is greater than 3 and collects them into a new map.

        - Calculating the Sum of All Values:
                int sum = map.values().stream().mapToInt(Integer::intValue).sum();
            This converts the values of the map to an IntStream and calculates the sum.

        - Converting Keys to a List:
                List<String> keys = map.keySet().stream().collect(Collectors.toList());
            This collects all the keys of the map into a List.


    2) FLATMAP
        - flattens streams of streams into single stream
            al.stream().flatMap(Collection :: stream).forEach(System.out :: println); // Java, Phython, JS, TS

        - flatMap k jgh p
            - distinct() :- return stream of distinct element
            - sorted() :- sort the element of streams in specific order
            - limit(3) :- returns a stream of 1st n element
            - skip(2) :- skip 1st n element



    3) SET
        Set<Integer> sq = number.stream().map(x -> x*x).collect(Collectors.toSet()); // [4, 9, 16, 25, 4]


    4) FILTER :- filter the element of stream based on predicate
            al.stream().filter(al -> al.startsWith("J")).forEach(System.out :: println);
            List<String> res = names.stream().filter(s -> s.startsWith("S")).collect(Collectors.toList());


    5) FOREACH
            number.stream().map(x -> x*x).forEach(y -> System.out.println(y))


    6) SORTED
            List<String> sh = names.stream().sorted().collect(Collectors.toList());


    -  REDUCE :- reduce the element of stream to single value of binary operation
            int sum = al.stream().reduce(0, (a,b) -> a + b)
    
    - COLLECT :- collects the element of stream into a collection
            List<Integer> sq = number.stream().map(x -> x*x).collect(Collectors.toList); // [4, 9, 16, 25, 4]
      