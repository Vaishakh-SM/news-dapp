// SPDX-License-Identifier: MIT
pragma solidity ^0.8.10;

contract Article {
    
    struct article{
        string ipfsHash;
        string title;
        string description;
        string authorName;
        string coverImageHash;
        int votes;
        address payable author;
    }

    address payable public owner;

    constructor() payable {
        owner = payable(msg.sender);
    }

    uint totalArticles = 0;
    mapping(string => uint) public articleID;
    mapping(uint=>mapping(address=>bool)) hasVoted;

    article[] public  articleStorage;

    function addArticle(string memory _ipfsHash, string memory _title, string memory _description, string memory _authorName, string memory _coverImageHash) public {
        if(articleID[_ipfsHash]==0){
            article memory newArticle;

            newArticle.ipfsHash = _ipfsHash;
            newArticle.author = payable(msg.sender);
            newArticle.votes = 0;
            newArticle.title = _title;
            newArticle.description = _description;
            newArticle.authorName = _authorName;
            newArticle.coverImageHash = _coverImageHash;

            articleStorage.push(newArticle);
            articleID[_ipfsHash] = totalArticles + 1;
            totalArticles = totalArticles + 1;
        }
    }

    function getAuthorKey(string memory _ipfsHash) public view returns (address){
        if(articleID[_ipfsHash]!=0)
            return articleStorage[articleID[_ipfsHash]-1].author;
        return 0x0000000000000000000000000000000000000000;
    }

    function getVotes(string memory _ipfsHash) public view returns (int){
        if(articleID[_ipfsHash]!=0)
            return articleStorage[articleID[_ipfsHash]-1].votes;
        return 0;
    }

    function getTitle(string memory _ipfsHash) public view returns (string memory){
        if(articleID[_ipfsHash]!=0)
            return articleStorage[articleID[_ipfsHash]-1].title;
        return "NA";
    }

    function getDescription(string memory _ipfsHash) public view returns (string memory){
        if(articleID[_ipfsHash]!=0)
            return articleStorage[articleID[_ipfsHash]-1].description;
        return "NA";
    }

    function getAuthorName(string memory _ipfsHash) public view returns (string memory ){
        if(articleID[_ipfsHash]!=0)
            return articleStorage[articleID[_ipfsHash]-1].authorName;
        return "NA";
    }

    function getCoverImageHash(string memory _ipfsHash) public view returns (string memory){
        if(articleID[_ipfsHash]!=0)
            return articleStorage[articleID[_ipfsHash]-1].coverImageHash;
        return "NA";
    }

    function getRecentArticles(uint retrieve) public view returns (article [] memory ){

        if(totalArticles <= retrieve){
            retrieve = totalArticles - 1;
        }

        article[] memory listOfArticles = new article[] (retrieve);
        uint i = 0;
        for(i=totalArticles-1;i>=totalArticles-retrieve;i--){
            listOfArticles[totalArticles-1-i] = articleStorage[i];
        }
        return listOfArticles;

    }

    function getArticle(uint _articleID) public view returns(article memory){
        return articleStorage[_articleID];
    }
    
    function getAllArticles() public view returns(article [] memory){
        return articleStorage;
    }

    function upvote(string memory _ipfsHash) public returns (int) {
        
        if(articleID[_ipfsHash]!=0)
        {
            if(hasVoted[articleID[_ipfsHash]-1][msg.sender] == false){
                articleStorage[articleID[_ipfsHash]-1].votes++;
                hasVoted[articleID[_ipfsHash]-1][msg.sender] = true;
            }
            
            return articleStorage[articleID[_ipfsHash]-1].votes;
        }
        return 0;
        
    }

    function downvote(string memory _ipfsHash) public returns (int) {
        
        if(articleID[_ipfsHash]!=0)
        {
            if(hasVoted[articleID[_ipfsHash]-1][msg.sender] == false){
                articleStorage[articleID[_ipfsHash]-1].votes--;
                hasVoted[articleID[_ipfsHash]-1][msg.sender] = true;
            }
            
            return articleStorage[articleID[_ipfsHash]-1].votes;
        }
        return 0;
        
    }

}