STREAMS
    List<Integer> number = Arrays.asList(2, 3, 4, 5, 2);
    List<String> names = Arrays.asList("Reflection", "Collection", "stream");

    - MAP
        - List<Integer> sq = number.stream().map(x -> x*x).collect(Collectors.toList); // [4, 9, 16, 25, 4]
        - Printing All Key-Value Pairs
                map.entrySet().stream().forEach(entry -> System.out.println(entry.getKey() + ": " + entry.getValue()));
            This uses a stream to iterate over the map's entries and print each key-value pair. 
        - Filtering Entries:
                Map<String, Integer> filteredMap = map.entrySet().stream().filter(entry -> entry.getValue() > 3).collect(Collectors.toMap(Map.Entry::getKey, Map.Entry::getValue));



    - SET
        List<Integer> sq = number.stream().map(x -> x*x); // [4, 9, 16, 25, 4]

    - FILTER

    - FOREACH

    - SORTED

    - 
      